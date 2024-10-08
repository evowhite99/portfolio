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
    const isMobile = window.innerWidth <= 768;

    // Define posiciones de cámara y modelo para escritorio y móvil
    const targetPositions = {
      0: {
        modelPos: isMobile ? [0, 60, 0] : [0, -30, 0],
        cameraPos: isMobile ? [550, 220, 550] : [350, 60, 350],
      },
      1: {
        modelPos: isMobile ? [166, -75.5, -97.3] : [202, -75.5, -97.3],
        cameraPos: isMobile ? [100, 23, 0] : [100, 23, 0],
      },
      2: {
        modelPos: isMobile ? [-70, 10, -65] : [-40, 88, -65],
        cameraPos: isMobile ? [3, 180, 0] : [3, 180, 0],
      },
      3: {
        modelPos: isMobile ? [-80, -130, 260] : [-80, -100, 470],
        cameraPos: isMobile ? [0, 30, 200] : [0, 50, 350],
      },
      4: {
        modelPos: isMobile ? [230, -160, -93] : [235, -150, -93],
        cameraPos: isMobile ? [100, 30, 0] : [100, 30, 0],
      },
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
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 20, 5]} intensity={2} />

      <Environment preset="city" />
      <Model
        modelPath="/models/room.glb"
        modelRef={modelRef}
        setIsLoading={setIsLoading}
      />
      <OrbitControls
        enableZoom={false}
        enableRotate={false}
        enablePan={false}
      />
    </>
  );
}

export default function Background({ currentSection, setIsLoading }) {
  return (
    <Canvas
      className="h-svh"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        zIndex: -1,
      }}
      gl={{
        antialias: false,
      }}
      onCreated={({ gl }) => {
        gl.setClearColor("#87CEEB"); // Establecer el color de fondo a azul cielo
      }}
    >
      <Scene currentSection={currentSection} setIsLoading={setIsLoading} />
    </Canvas>
  );
}
