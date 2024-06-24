"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const CreateGame = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) {
      setDarkMode(JSON.parse(savedMode));
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", JSON.stringify(newMode));
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="m-0 box-border p-0">
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
      </div>
    </div>
  );
};

export default CreateGame;
