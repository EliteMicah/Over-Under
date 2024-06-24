"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const CreateGame = () => {
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
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="box-border p-0">
        <div className="flex fixed overflow-hidden top-0 h-[75px] w-full items-center justify-between dark:bg-neutral-800 z-50 bg-blue-100">
          <h1 className="m-5 font-extrabold text-2xl font-times dark:text-white drop-shadow-lg">
            <Link href="http://localhost:3000">Over Under</Link>
          </h1>
          <ul className="flex px-3 items-center dark:text-white m-5 font-bold">
            <li className="mr-4">
              <button onClick={toggleDarkMode}>
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

        <div className="relative pt-[75px] w-lvw h-lvh dark:bg-gradient-to-b from-[#0e1419] to-[#292929] bg-neutral-100">
          <div className="flex gap-4 justify-center items-center pt-7 pb-4">
            <h1 className="font-impact text-5xl font-bold dark:text-slate-100 drop-shadow-lg">
              Create your ruleset!
            </h1>
          </div>

          <div className="flex flex-col flex-wrap gap-1 mx-400">
            <h2 className="font-bold text-xl dark:text-slate-100 drop-shadow-lg">
              Name your game!
            </h2>
            <input
              type="text"
              className="font-bold w-300 px-1 py-1 dark:bg-transparent dark:text-slate-100 bg-neutral-100 rounded border-2"
              placeholder="Name"
            />
            <h2 className="font-bold text-xl mt-1 dark:text-slate-100 drop-shadow-lg">
              What are you betting on?
            </h2>
            <input
              type="text"
              className="font-bold px-1 py-1 dark:bg-transparent dark:text-slate-100 bg-neutral-100 rounded border-2"
              placeholder="Bet #1"
            />
            <h2 className="font-bold text-xl mt-1 dark:text-slate-100 drop-shadow-lg">
              What else are you betting on?
            </h2>
            <input
              type="text"
              className="font-bold px-1 py-1 dark:bg-transparent dark:text-slate-100 bg-neutral-100 rounded border-2"
              placeholder="Bet #2"
            />
          </div>

          <div className="flex justify-center items-center pt-7 pb-4">
            <button className="dark:text-slate-100 dark:bg-sky-500 bg-sky-300 text-4xl font-bold font-impact border-2 rounded-lg px-4 py-3">
              Create!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateGame;
