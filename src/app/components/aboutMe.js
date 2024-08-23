import { languages } from "../components/languages";
import Image from "next/image";

export default function AboutMe({ language }) {
  return (
    <div className="relative w-full flex flex-col justify-center p-10 mt-52 mb-96 ">
      <div className="flex justify-center mb-6">
        <Image
          src="/images/photo.webp"
          alt="Photo developer"
          width={150}
          height={100}
          className="rounded-3xl border-4 hover:border-blue-500 duration-150"
        />
      </div>
      <div className="hover:bg-blue-400 duration-300 mx-auto w-3/5 rounded-2xl p-4">
        <div className="text-center text-white mb-6">
          <h1 className="text-3xl font-bold">
            {languages[language].titleAboutMe}
          </h1>
        </div>
        <div className="text-center text-white mb-4">
          <p> {languages[language].descriptionAboutMe1}</p>
        </div>
        <div className="text-center text-white mb-4 ">
          <p>{languages[language].descriptionAboutMe2}</p>
        </div>
        <div className="text-center text-white mb-4">
          <p>{languages[language].descriptionAboutMe3}</p>
          <ul className="list-disc list-inside">
            <li> {languages[language].descriptionAboutMe4}</li>
            <li> {languages[language].descriptionAboutMe5}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
