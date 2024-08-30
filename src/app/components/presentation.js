import { languages } from "../components/languages";

export default function Presentation({ language }) {
  return (
    <div className="flex items-center justify-center">
      <div
        id="custom-shadow"
        className="relative flex flex-col justify-center lg:p-10 p-2 h-40 rounded-2xl hover:bg-blue-400 hover:bg-opacity-80 duration-300 lg:mt-40 mb-20 mr-5 ml-5"
      >
        <div className="lg:text-4xl text-2xl text-center text-white font-bold mb-2">
          {languages[language].titlePresentation}
        </div>
        <div className="text-center text-white lg:text-lg text-xs">
          {languages[language].descriptionPresentation}
        </div>
        <div className="flex justify-center mt-4">
          <svg
            className="w-6 h-6 text-white animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
