"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

function addPost(gameName, bet1, clarification) {
  const newPost = {
    gameName: gameName,
    bet1: bet1,
    betDescription: betDescription,
  };

  setPosts([...posts, newPost]);
  setGameName("");
  setBet1("");
  setBetDescription("");
}

const CreateGame = () => {
  const [gameName, setGameName] = useState("");
  const [bet1, setBet1] = useState("");
  const [betDescription, setBetDescription] = useState("");

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
          <h1 className="m-5 font-extrabold text-3xl font-times dark:text-white drop-shadow-lg">
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
              Create your Ruleset!
            </h1>
          </div>

          <div className="flex flex-col flex-wrap gap-1 mx-400">
            <h2 className="font-bold text-xl dark:text-slate-100 drop-shadow-lg">
              Name your game!
            </h2>
            <input
              type="text"
              className="font-bold w-300 px-1 py-1 dark:bg-transparent dark:text-slate-100 bg-neutral-100 rounded border-2"
              placeholder="Finance Bros"
              maxLength={30}
              value={gameName}
            />

            <h2 className="font-bold text-xl mt-1 dark:text-slate-100 drop-shadow-lg">
              What are you betting on?
            </h2>
            <input
              type="text"
              className="font-bold px-1 py-1 dark:bg-transparent dark:text-slate-100 bg-neutral-100 rounded border-2"
              placeholder="How many times will Lucy ask a question in class"
              maxLength={120}
              value={bet1}
            />

            {/*
            <h2 className="font-bold text-xl mt-1 dark:text-slate-100 drop-shadow-lg">
              What else are you betting on?
            </h2>
            <input
              type="text"
              className="font-bold px-1 py-1 dark:bg-transparent dark:text-slate-100 bg-neutral-100 rounded border-2"
              placeholder="Will Collin fall asleep in class"
              maxLength={120}
              value={bet2}
            />
            */}

            <h2 className="font-bold text-xl mt-1 dark:text-slate-100 drop-shadow-lg">
              Add clarification for the bets?
            </h2>
            <input
              type="text"
              className="font-bold px-1 py-1 dark:bg-transparent dark:text-slate-100 bg-neutral-100 rounded border-2"
              placeholder="Optional"
              maxLength={120}
              value={betDescription}
            />
          </div>

          <div className="flex justify-center items-center pt-7 pb-4">
            <Link
              href="/play-game"
              className="dark:text-slate-100 dark:bg-sky-500 bg-sky-300 text-4xl font-bold font-impact border-2 
            rounded-lg px-4 py-3 drop-shadow-lg hover:scale-105 hover:bg-opacity-90 focus:scale-95 transition-all duration-75 
            ease-out shadow-lg"
            >
              <button onClick={addPost}>Create!</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateGame;
