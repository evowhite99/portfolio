import { languages } from "../components/languages";

export default function Presentation({ language }) {
  return (
    <div className="flex items-center justify-center ">
      <div className="relative  flex flex-col justify-center lg:p-10 p-2 h-40 rounded-2xl  hover:bg-blue-400 duration-300 lg:mt-40   mt-2 mb-10 mr-5 ml-5">
        <div className="lg:text-4xl text-2xl text-center text-white font-bold mb-2">
          {languages[language].titlePresentation}
        </div>
        <div className="text-center text-white lg:text-lg ">
          {languages[language].descriptionPresentation}
        </div>
      </div>
    </div>
  );
}
