import React from "react";
import { languages } from "../components/languages";

function Message({ language }) {
  return (
    <div
      id="custom-shadow"
      className="relative flex flex-col justify-center p-10 mt-52 mb-24 hover:bg-blue-400 hover:bg-opacity-80  px-2  duration-300 mx-auto lg:w-5/12 w-10/12 rounded-2xl lg:pl-10 lg:pr-10 text-center text-white "
    >
      <h1 className="lg:text-3xl text-xl font-bold">
        {languages[language].message1}
      </h1>
      <div className="mx-auto mt-4 mb-10">{languages[language].message2}</div>
      <a
        id="custom-shadow"
        href="mailto:inforubentrabajos@gmail.com"
        className="animate-bounce cursor-pointer text-center text-white hover:bg-blue-500 rounded-xl hover:scale-125 duration-300  text-2xl font-bold lg:w-3/12 mx-auto"
      >
        {languages[language].contact}
      </a>
    </div>
  );
}

export default React.memo(Message);
