import { useState } from "react";
import { languages } from "../components/languages";
import Image from "next/image";

export default function Projects({ language }) {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [infoVisible, setInfoVisible] = useState(null);
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const projects = [
    {
      image: "/images/portfolioThreeJS.webp",
      link: "https://www.rubenportfolio.com",
      info1: `${languages[language].portfolioThreeJS1}`,
      info2: `${languages[language].portfolioThreeJS2}`,
    },
    {
      image: "/images/ShopifyPhoto.webp",
      info1: `${languages[language].onlineStore1}`,
      info2: `${languages[language].onlineStore2}`,
    },
    {
      image: "/images/WordPressPhoto.webp",
      info1: `${languages[language].portfolioWordPress1}`,
      info2: `${languages[language].portfolioWordPress2}`,
    },

    {
      image: "/images/TailwindPhoto.webp",
      link: "https://example.com/project1",
      info1: `${languages[language].projectTailwind1}`,
      info2: `${languages[language].projectTailwind2}`,
    },
  ];

  const galleryItems = [
    { type: "video", src: "/videos/ShopifyVideo.mp4", alt: "Video Shopify" },
  ];

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, projects.length));
  };

  const toggleVideoVisibility = () => {
    setIsVideoVisible((prev) => !prev);
  };

  const handleInfoClick = (index) => {
    setInfoVisible(index);
  };

  const handleBodyClick = () => {
    setInfoVisible(null);
  };

  return (
    <div
      className="relative w-full flex flex-col justify-center p-10 mt-60 mb-96"
      onClick={handleBodyClick}
    >
      {/* Sección de Proyectos */}
      <div className="text-center text-white mb-6 ">
        <div className="rounded-2xl mx-auto w-2/5 p-2 hover:bg-blue-400 duration-300">
          <h1 className="text-3xl font-bold">
            {languages[language].titleProjects}
          </h1>
          <div className="">{languages[language].descriptionProjects}</div>
        </div>
      </div>
      <div className="grid grid-cols-3 content-center gap-6">
        {projects.slice(0, visibleProjects).map((project, index) => (
          <div
            key={index}
            className="relative group"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={project.image}
              alt={`Project ${index + 1}`}
              width={500}
              height={100}
              className={`border border-blue-500 transition-all duration-300 ${
                infoVisible === index ? "opacity-50" : "opacity-100"
              }`}
            />
            {infoVisible === index && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 text-white px-auto flex-col">
                <h1 className="font-bold">{project.info1}</h1>
                <p className="ml-10 mr-10">{project.info2}</p>
              </div>
            )}
            <div className="absolute inset-0 flex justify-start items-end opacity-100 group-hover:opacity-100 transition-opacity duration-300">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white px-2 hover:bg-blue-700 hover:scale-110 duration-150"
                >
                  {languages[language].buttonLinkProjects}
                </a>
              )}
              <button
                onClick={() => handleInfoClick(index)}
                className="bg-green-500 text-white hover:bg-green-700 px-2 ml-2 hover:scale-110 duration-150"
              >
                {languages[language].buttonInfoProjects}
              </button>
            </div>
          </div>
        ))}
      </div>
      {visibleProjects < projects.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={loadMoreProjects}
            className="relative bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 hover:scale-110 duration-150 "
          >
            {languages[language].buttonLoadProjects}
          </button>
        </div>
      )}

      {/* Sección de Galería - Video con botón para mostrar/ocultar */}
      <div className="text-center text-white mt-20 mb-6 ">
        <div className="rounded-2xl mx-auto w-3/12 p-2 hover:bg-blue-400 duration-300">
          <h1 className="text-3xl font-bold ">
            {languages[language].titleContent}
          </h1>
          <p>{languages[language].descriptionContent}</p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col">
        <button
          onClick={toggleVideoVisibility}
          className="mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700  hover:scale-110 duration-150"
        >
          {isVideoVisible
            ? `${languages[language].buttonLoadContent2}`
            : `${languages[language].buttonLoadContent1}`}
        </button>

        {isVideoVisible && (
          <>
            <p className="w-2/5 text-center mb-2">
              {languages[language].alertText}
            </p>

            <video
              controls
              width="480"
              height="360"
              className="border border-blue-500 rounded-lg shadow-lg"
            >
              <source src={galleryItems[0].src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </>
        )}
      </div>
    </div>
  );
}
