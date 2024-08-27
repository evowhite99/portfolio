import Image from "next/image";
import { languages } from "../components/languages";
export default function Tools({ language }) {
  const languagesVar = [
    { name: "HTML", src: "/images/html.png" },
    { name: "CSS", src: "/images/css.png" },
    { name: "Bootstrap", src: "/images/bootstrap.png" },
    { name: "Tailwind CSS", src: "/images/tailwind.png" },
    { name: "JavaScript", src: "/images/javascript.png" },
    { name: "React", src: "/images/react.png" },
    { name: "Next.js", src: "/images/next.png" },
    { name: "Three.js", src: "/images/three.png" },
    { name: "PHP", src: "/images/php.png" },
    { name: "Laravel", src: "/images/laravel.png" },
    { name: "Testing Dusk (PHP)", src: "/images/dusk.png" },
    { name: "Java", src: "/images/java.png" },
    { name: "MySQL", src: "/images/mysql.png" },
    { name: "WordPress", src: "/images/wordpress.png" },
    { name: "Shopify", src: "/images/shopify.png" },
  ];

  const tools = [
    { name: "VS Code", src: "/images/vscode.png" },
    { name: "Git", src: "/images/git.png" },
    { name: "GitHub", src: "/images/github.png" },
    { name: "Linux terminal", src: "/images/linux.png" },
    { name: "PHPStorm", src: "/images/phpstorm.png" },
    { name: "Netbeans", src: "/images/netbeans.png" },
    { name: "Eclipse", src: "/images/eclipse.png" },
    { name: "Photopea", src: "/images/photopea.png" },
    { name: "Power director", src: "/images/power.png" },
    { name: "Unreal Engine 5", src: "/images/ue5.png" },
    { name: "Blender", src: "/images/blender.png" },
  ];
  return (
    <div className="relative w-full flex flex-col justify-center p-10 mt-52 mb-52">
      <div className="text-center text-white mb-6">
        <div className="hover:bg-blue-400 hover:bg-opacity-60 duration-300 rounded-3xl pt-5 pb-5">
          <h1 className="text-3xl font-bold mb-5">
            {languages[language].tools1}
          </h1>
          <div className="grid lg:grid-cols-6 grid-cols-3  gap-4">
            {languagesVar.map((language, index) => (
              <div key={index} className="flex flex-col items-center">
                <Image
                  src={language.src}
                  alt={language.name}
                  width={64}
                  height={64}
                  className="rounded"
                />
                <p className="text-white mt-2">{language.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="hover:bg-blue-400 hover:bg-opacity-60 duration-300 rounded-3xl pt-5 pb-5 mt-32">
          <h1 className="text-3xl font-bold  mb-5">
            {languages[language].tools2}
          </h1>
          <div className="grid lg:grid-cols-6 grid-cols-3 gap-4">
            {tools.map((tool, index) => (
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
