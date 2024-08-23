import { languages } from "../components/languages";

export default function Presentation({ language }) {
  return (
    <div className="flex items-center justify-center ">
      <div className="relative  flex flex-col justify-center p-10 h-40 rounded-2xl  hover:bg-blue-400 duration-300 mt-40 mb-10">
        <div className="text-4xl text-center text-white font-bold mb-2">
          {languages[language].titlePresentation}
        </div>
        <div className="text-center text-white text-lg">
          {languages[language].descriptionPresentation}
        </div>
      </div>
    </div>
  );
}
