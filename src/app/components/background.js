import { Canvas, useThree } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import gsap from "gsap";

// Componente para el modelo 3D
const Model = ({ modelPath, modelRef, setIsLoading }) => {
  const { scene, nodes } = useGLTF(modelPath);

  useEffect(() => {
    if (nodes) {
      setIsLoading(false); // Cuando el modelo se haya cargado, cambia el estado a falso
    }
  }, [nodes, setIsLoading]);

  return <primitive ref={modelRef} object={scene} />;
};

function Scene({ currentSection, setIsLoading }) {
  const { camera } = useThree();
  const cameraRef = useRef(camera);
  const modelRef = useRef(); // Referencia para el modelo 3D

  useEffect(() => {
    const targetPositions = {
      0: { modelPos: [0, -30, 0], cameraPos: [350, 60, 350] },
      1: { modelPos: [208, -75.5, -97.3], cameraPos: [100, 23, 0] },
      2: { modelPos: [-40, 97, -65], cameraPos: [3, 180, 0] },
      3: { modelPos: [-80, -100, 470], cameraPos: [0, 50, 350] },
      4: { modelPos: [240, -150, -93], cameraPos: [100, 30, 0] },
    };

    const targetPosition = targetPositions[currentSection];

    if (targetPosition) {
      // Animar la posición de la cámara
      gsap.to(cameraRef.current.position, {
        x: targetPosition.cameraPos[0],
        y: targetPosition.cameraPos[1],
        z: targetPosition.cameraPos[2],
        duration: 1, // Duración de la animación en segundos
        ease: "power2.inOut",
      });

      // Animar la posición del modelo (si es necesario)
      gsap.to(modelRef.current.position, {
        x: targetPosition.modelPos[0],
        y: targetPosition.modelPos[1],
        z: targetPosition.modelPos[2],
        duration: 1, // Duración de la animación en segundos
        ease: "power2.inOut",
      });
    }
  }, [currentSection]);

  return (
    <>
      <ambientLight intensity={0.5} /> {/* Luz ambiental */}
      <directionalLight position={[5, 20, 5]} intensity={3} />
      {/* Luz direccional */}
      <pointLight position={[0, 10, 10]} intensity={1} /> {/* Luz puntual */}
      <Environment preset="city" /> {/* Entorno para iluminación realista */}
      <Model
        modelPath="/models/room.glb"
        modelRef={modelRef}
        setIsLoading={setIsLoading}
      />
      {/* Modelo 3D */}
      <OrbitControls enableZoom={false} />
    </>
  );
}

export default function Background({ currentSection, setIsLoading }) {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
      gl={{
        antialias: true,
      }}
      onCreated={({ gl }) => {
        gl.setClearColor("#87CEEB"); // Establecer el color de fondo a azul cielo
      }}
    >
      <Scene currentSection={currentSection} setIsLoading={setIsLoading} />
    </Canvas>
  );
}
