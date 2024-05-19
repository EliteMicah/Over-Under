"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return homeScreen();
}

function homeScreen() {
  return (
    <div className="m-0 box-border p-0">
      <div className="flex fixed overflow-hidden top-0 h-75 w-full items-center justify-between bg-header-grey">
        <h1 className="m-5 font-bold text-2xl font-times text-white">
          <a href="http://localhost:3000" target="_blank">
            Over Under
          </a>
        </h1>
        <ul className="flex px-3 items-center text-white m-5">
          <li className="mr-4">
            {" "}
            <a href="https://github.com/EliteMicah/Over-Under" target="_blank">
              {" "}
              GitHub{" "}
            </a>{" "}
          </li>
          <li>
            {" "}
            <a
              href="https://www.linkedin.com/in/micahwoodring/"
              target="_blank"
            >
              {" "}
              LinkedIn{" "}
            </a>{" "}
          </li>
        </ul>
      </div>

      <div className="h-screen pt-75 min-h-screen w-screen bg-gray-600 bg-gradient-to-b from-[#0e1419] to-[#292929]">
        <div className="flex justify-center flex-wrap container mx-auto">
          <a
            href="#create-game"
            className="no-underline block mx-4 my-6 md:mx-6 md:my-8 lg:mx-10 lg:my-10"
          >
            <div
              className="bg-gradient-to-b from-[#597993] to-[#292929] border-4 border-sky-800 rounded-2xl 
              w-full sm:w-[150px] md:w-[250px] lg:w-[400px] h-full sm:h-[150px] md:h-[250px] lg:h-[400px] text-white flex flex-col items-center justify-center
               hover:bg-blue-900 hover:opacity-80"
            >
              <p className="text-5xl font-impact">Create</p>
              <p className="mt-5 text-center text-xl font-arial">
                Create a game to play with your friends!
              </p>
            </div>
          </a>
          <a
            href="#join-game"
            className="no-underline block mx-4 my-6 md:mx-6 md:my-8 lg:mx-8 lg:my-10"
          >
            <div
              className="bg-gradient-to-b from-[#597993] to-[#292929] border-4 border-sky-800 rounded-2xl 
              w-full sm:w-[150px] md:w-[250px] lg:w-[400px] h-full sm:h-[150px] md:h-[250px] lg:h-[400px] text-white flex flex-col items-center justify-center
               hover:bg-blue-900 hover:opacity-80"
            >
              <p className="text-5xl font-impact">Join</p>
              <p className="mt-5 text-center text-xl font-arial">
                Join a game and start playing!
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
