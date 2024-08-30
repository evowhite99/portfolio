import React, { useState, useEffect, useCallback } from "react";
import throttle from "lodash/throttle";
import { languages } from "../components/languages";
import Image from "next/image";

const Footer = React.memo(({ language }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = useCallback(
    throttle(() => {
      let scroll = document.documentElement.scrollTop;

      if (scroll > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }, 200),
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
      className="relative flex-col flex justify-center items-center p-10 w-full hover:bg-blue-400 hover:bg-opacity-80 px-2 duration-300"
    >
      <div className="mb-10"> {languages[language].footer1}</div>

      <a
        href="mailto:inforubentrabajos@gmail.com"
        className="cursor-pointer text-center text-white px-2 hover:scale-125 duration-300 mb-10"
      >
        <Image
          src="/images/gmail.webp"
          alt="Gmail Icon"
          width={50}
          height={50}
          priority
        />
      </a>
      <div> {languages[language].footer2}</div>
      <div>
        <img
          className={`fixed lg:bottom-5 bottom-2 lg:right-7 right-2 lg:h-10 h-8 animate-pulse bg-gray-200 rounded-md cursor-pointer transition-all duration-300 ease-in-out hover:scale-125 ${
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
});

export default Footer;
