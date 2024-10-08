import { languages } from "../components/languages";
import Image from "next/image";
import React, { useState, useEffect, useCallback } from "react";
import { throttle } from "lodash"; // Asegúrate de tener lodash instalado

function Footer({ language }) {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = useCallback(
    throttle(() => {
      const scroll = document.documentElement.scrollTop;
      setIsVisible(scroll > 100);
    }, 200), // Ajusta el tiempo según sea necesario
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div
      id="custom-shadow"
      className="relative flex-col flex justify-center items-center p-14  w-full hover:bg-blue-400 hover:bg-opacity-80  px-2  duration-300"
    >
      <div className="mb-10">{languages[language].footer1}</div>

      <a
        href="mailto:inforubentrabajos@gmail.com"
        className="cursor-pointer text-center text-white px-2 hover:scale-125 duration-300 mb-10"
      >
        <Image
          src="/images/gmail.webp"
          alt="Photo developer"
          width={50}
          height={100}
        />
      </a>
      <div>{languages[language].footer2}</div>
      <div>
        <div
          className={`animate-pulse fixed bottom-2 p-1 h-auto w-11/12 text-center mb-1 -translate-x-1/2 text-sm  bg-gray-200 text-black rounded-md cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-400 hover:text-white  ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-100 translate-y-96"
          } lg:hidden`}
        >
          {languages[language].help}
        </div>

        <img
          className={` fixed lg:bottom-5 bottom-2 lg:right-7 right-4 lg:h-10 h-7 mb-1 bg-gray-200 rounded-md cursor-pointer transition-all duration-300 ease-in-out hover:scale-125 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-100 translate-x-40"
          }`}
          src={"/images/upIcon.png"}
          alt="Up Web"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
      </div>
    </div>
  );
}

export default React.memo(Footer);
