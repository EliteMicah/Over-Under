"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  // Initialize darkMode based on localStorage value if it exists
  const getInitialDarkMode = () => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  };

  const [darkMode, setDarkMode] = useState(getInitialDarkMode);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="m-0 box-border p-0">
        <div className="flex fixed overflow-hidden top-0 h-[75px] w-full items-center justify-between dark:bg-neutral-800 z-50 bg-blue-100">
          <h1 className="m-5 font-extrabold text-2xl font-times dark:text-white drop-shadow-lg">
            <Link href="http://localhost:3000">Over Under</Link>
          </h1>
          <ul className="flex px-3 items-center dark:text-white m-5 font-bold">
            <li className="mr-4">
              <button className="" onClick={toggleDarkMode}>
                {darkMode ? "Light" : "Dark"}
              </button>
            </li>
            <li className="mr-4">
              <Link
                href="https://github.com/EliteMicah/Over-Under"
                target="_blank"
              >
                GitHub
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/micahwoodring/"
                target="_blank"
              >
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>

        <div
          className="relative pt-[75px] w-lvw h-lvh dark:bg-gray-600 dark:bg-gradient-to-b from-[#0e1419] to-[#292929]
        bg-neutral-100"
        >
          <div className="flex gap-4 justify-center items-center pt-7 pb-4">
            <h1 className="font-impact text-5xl font-bold dark:text-slate-100 drop-shadow-lg">
              A Social Betting Game!
            </h1>
          </div>
          <div className="flex gap-4 items-center justify-center">
            <Link
              href="/create-game"
              className="m-6 box-border square-card items-center justify-center dark:bg-sky-500 bg-sky-300 rounded-xl py-2 
            hover:bg-opacity-90 focus:scale-95 transition-all duration-75 ease-out shadow-sm flex flex-col hover:scale-105
            max-h-full max-w-full overflow-hidden text-center"
            >
              <h2 className="text-6xl font-impact drop-shadow-lg text-gray-950">
                Create
              </h2>
              <p className="dark:text-slate-300 text-slate-200 text-lg p-4 drop-shadow-lg">
                Create a game to play with your friends!
              </p>
            </Link>

            <Link
              href="/join-game"
              className="m-6 box-border square-card items-center justify-center dark:bg-sky-500 bg-sky-300 rounded-xl py-2 
            hover:bg-opacity-90 focus:scale-95 transition-all duration-75 ease-out shadow-sm flex flex-col hover:scale-105
            max-h-full max-w-full overflow-hidden text-center"
            >
              <h2 className="text-6xl font-impact drop-shadow-lg text-gray-950">
                Join
              </h2>
              <p className="dark:text-slate-300 text-slate-200 text-lg p-4 drop-shadow-lg">
                Join a game to start playing!
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
