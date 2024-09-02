import React, { useEffect, useCallback } from "react";
import { languages } from "../components/languages";

function Header({ language, setLanguage }) {
  useEffect(() => {
    window.localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = useCallback(() => {
    setLanguage((currentLanguage) => (currentLanguage === "ES" ? "EN" : "ES"));
  }, [setLanguage]);

  return (
    <header
      id="custom-shadow"
      className="relative w-full  flex justify-between lg:p-10 pt-10 pb-10 pl-4 pr-4 lg:mb-64 lg:text-2xl text-sm font-bold hover:bg-blue-400 duration-300 hover:bg-opacity-80"
    >
      <div className="px-2 text-left text-white">
        {languages[language].name}
      </div>

      <div className="flex">
        <div
          id="custom-shadow"
          onClick={toggleLanguage}
          className="cursor-pointer text-right text-white lg:mr-10 hover:bg-blue-500 rounded-xl px-2 pb-1 lg:hover:scale-125 hover:scale-110 duration-300 mr-1"
        >
          <span className="">{language === "ES" ? "Inglés" : "Spanish"}</span>
        </div>

        <a
          id="custom-shadow"
          href="mailto:inforubentrabajos@gmail.com"
          className="cursor-pointer text-right text-white lg:mr-10 hover:bg-blue-500 rounded-xl px-2 pb-1 lg:hover:scale-125 hover:scale-110 duration-300"
        >
          {languages[language].contact}
        </a>
      </div>
    </header>
  );
}

export default React.memo(Header);
