import { languages } from "../components/languages";
export default function Message({ language }) {
  return (
    <div className="relative flex flex-col justify-center p-10 mt-52 mb-40 hover:bg-blue-400  px-2  duration-300 mx-auto w-5/12 rounded-2xl pl-10 pr-10 text-center text-white ">
      <h1 className="text-3xl font-bold"> {languages[language].message1}</h1>
      <div className="mx-auto mt-4 mb-10">{languages[language].message2}</div>
      <a
        href="mailto:inforubentrabajos@gmail.com"
        className="cursor-pointer text-center text-white   hover:bg-blue-600 rounded-xl hover:scale-125 duration-300 mb-6 text-2xl font-bold p-2 w-3/12 mx-auto"
      >
        {languages[language].contact}
      </a>
    </div>
  );
}
