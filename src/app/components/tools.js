import { useMemo } from "react";
import Image from "next/image";
import { languages } from "../components/languages";

export default function Tools({ language }) {
  // Memoriza la lista de lenguajes
  const frontEnd = useMemo(
    () => [
      { name: "HTML", src: "/images/html.png" },
      { name: "CSS", src: "/images/css.png" },
      { name: "SASS (básico)", src: "/images/sass.png" },
      { name: "Bootstrap", src: "/images/bootstrap.png" },
      { name: "Tailwind CSS", src: "/images/tailwind.png" },

      { name: "JavaScript", src: "/images/javascript.png" },
      { name: "Jest (básico)", src: "/images/jest.png" },
      { name: "TypeScript (básico)", src: "/images/typescript.png" },
      { name: "React.js", src: "/images/react.png" },
      { name: "Next.js", src: "/images/next.png" },

      { name: "Three.js", src: "/images/three.png" },
    ],
    []
  );

  const backEnd = useMemo(
    () => [
      { name: "PHP", src: "/images/php.png" },
      { name: "Laravel", src: "/images/laravel.png" },
      { name: "Testing Dusk (PHP)", src: "/images/dusk.png" },
      { name: "Java", src: "/images/java.png" },
      { name: "MySQL", src: "/images/mysql.png" },
    ],
    []
  );

  const otherTools = useMemo(
    () => [
      { name: "VS Code", src: "/images/vscode.png" },
      { name: "PHPStorm", src: "/images/phpstorm.png" },
      { name: "Netbeans", src: "/images/netbeans.png" },
      { name: "Eclipse", src: "/images/eclipse.png" },
      { name: "Linux terminal", src: "/images/linux.png" },

      { name: "WordPress", src: "/images/wordpress.png" },
      { name: "Shopify", src: "/images/shopify.png" },
      { name: "Git", src: "/images/git.png" },
      { name: "GitHub", src: "/images/github.png" },
      { name: "Figma (básico)", src: "/images/figma.png" },

      { name: "Photopea", src: "/images/photopea.png" },
      { name: "UML", src: "/images/uml.png" },
      { name: "XML", src: "/images/xml.png" },
      { name: "XPath (básico)", src: "/images/xpath.png" },
      { name: "XQuery (básico)", src: "/images/xquery.png" },
    ],
    []
  );

  return (
    <div className="relative w-full flex flex-col justify-center p-10 mt-52 mb-52">
      <div className="text-center text-white mb-6">
        <div
          id="custom-shadow"
          className="hover:bg-blue-400 hover:bg-opacity-80 duration-300 rounded-3xl pt-5 pb-5"
        >
          <h1 className="text-3xl font-bold pr-5 pl-5 mb-5">
            {languages[language].tools1}
          </h1>
          <div className="grid lg:grid-cols-5 grid-cols-3  gap-4">
            {frontEnd.map((front, index) => (
              <div key={index} className="flex flex-col items-center">
                <Image
                  src={front.src}
                  alt={front.name}
                  width={64}
                  height={64}
                  className="rounded"
                />
                <p className="text-white mt-2">{front.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div
          id="custom-shadow"
          className="hover:bg-blue-400 hover:bg-opacity-80 duration-300 rounded-3xl pt-5 pb-5 mt-32"
        >
          <h1 className="text-3xl font-bold pr-5 pl-5 mb-5">
            {languages[language].tools2}
          </h1>
          <div className="grid lg:grid-cols-5 grid-cols-3 gap-4">
            {backEnd.map((back, index) => (
              <div key={index} className="flex flex-col items-center">
                <Image
                  src={back.src}
                  alt={back.name}
                  width={64}
                  height={64}
                  className="rounded"
                />
                <p className="text-white mt-2">{back.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div
          id="custom-shadow"
          className="hover:bg-blue-400 hover:bg-opacity-80 duration-300 rounded-3xl pt-5 pb-5 mt-32"
        >
          <h1 className="lg:text-3xl text-3xl font-bold  mb-5">
            {languages[language].tools3}
          </h1>
          <div className="grid lg:grid-cols-5 grid-cols-3 gap-4">
            {otherTools.map((tool, index) => (
              <div key={index} className="flex flex-col items-center">
                <Image
                  src={tool.src}
                  alt={tool.name}
                  width={64}
                  height={64}
                  className="rounded"
                />
                <p className="text-white mt-2">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
