import React, { useEffect } from "react";
import { languages } from "../components/languages";

export default function Header({ language, setLanguage }) {
  useEffect(() => {
    window.localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((currentLanguage) => (currentLanguage === "ES" ? "EN" : "ES"));
  };

  return (
    <header className="relative w-full  flex justify-between p-10 mb-72 text-2xl hover:bg-blue-400 duration-300">
      <div className="px-2 text-left text-white">Rubén Pérez Lara</div>
      <div className="flex ">
        <div
          onClick={toggleLanguage}
          className="cursor-pointer text-right text-white mr-10  hover:bg-blue-600 rounded-xl px-2  hover:scale-125 duration-300"
        >
          <span className="lg:inline hidden">
            {language === "ES" ? "Inglés" : "Spanish"}
          </span>
        </div>

        <a
          href="mailto:inforubentrabajos@gmail.com"
          className="cursor-pointer text-right text-white mr-10  hover:bg-blue-600 rounded-xl px-2  hover:scale-125 duration-300"
        >
          {languages[language].contact}
        </a>
      </div>
    </header>
  );
}
