import { languages } from "../components/languages";
import Image from "next/image";

export default function AboutMe({ language }) {
  return (
    <div className="relative w-full flex flex-col justify-center lg:p-10 p-4 mt-52 mb-96 ">
      <div className="flex justify-center mb-6">
        <Image
          src="/images/photo.webp"
          alt="Photo developer"
          width={130}
          height={100}
          className="rounded-3xl border-4 hover:border-blue-500 hover:border-opacity-60 duration-150 
                     w-20 h-28 lg:w-36 lg:h-52"
        />
      </div>
      <div className="hover:bg-blue-400 hover:bg-opacity-60 p-4 duration-300 mx-auto lg:w-3/5 rounded-2xl lg:p-4">
        <div className="text-center text-white mb-6">
          <h1 className="lg:text-3xl text-2xl font-bold">
            {languages[language].titleAboutMe1}
          </h1>
          <h1 className="lg:text-3xl text-2xl font-bold">
            {languages[language].titleAboutMe2}
          </h1>
        </div>
        <div className="lg:text-base text-sm text-center text-white mb-4">
          <p> {languages[language].descriptionAboutMe1}</p>
        </div>
        <div className="lg:text-base text-sm  text-center text-white mb-4 ">
          <p>{languages[language].descriptionAboutMe2}</p>
        </div>
        <div className="lg:text-base text-sm  text-center text-white mb-4">
          <p>{languages[language].descriptionAboutMe3}</p>
          <ul className="lg:text-base text-sm  list-disc list-inside ">
            <li className="text-white">
              {languages[language].descriptionAboutMe4}
            </li>
            <li className="text-white">
              {languages[language].descriptionAboutMe5}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
