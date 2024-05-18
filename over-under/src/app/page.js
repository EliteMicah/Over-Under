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
        <h1 className="m-5 font-bold text-2xl font-times text-white">Over Under</h1>
        <ul className="flex px-3 items-center text-white m-5">
          <li className="mr-4"> <a href="https://duckduckgo.com/" target="_blank"> Home </a> </li>
          <li className="mr-4"> <a href="https://github.com/EliteMicah/Over-Under" target="_blank"> GitHub </a> </li>
          <li> <a href="https://www.linkedin.com/in/micahwoodring/" target="_blank"> LinkedIn </a> </li>
        </ul>
      </div>

      <div className="pt-75 h-[1500px] w-screen bg-gray-600 bg-gradient-to-b from-[#0e1419] to-[#292929]">
        <div className="flex justify-center flex-wrap border-green-800 border-4 min-h-screen container mx-auto">
            <div className="border-4 border-sky-800 rounded-2xl w-[400px] h-[400px] m-auto mx-6 text-white flex flex-col items-center justify-center">
              <p className="cardName">Create</p>
              <p className="cardText">Create a game to play with your friends!</p>
            </div>

            <div className="border-4 border-sky-800 rounded-2xl w-[400px] h-[400px] m-auto mx-6 text-white flex flex-col items-center justify-center">
              <p className="cardName">Join</p>
              <p className="cardText">Join a game and begin playing!</p>
            </div>
        </div>
      </div>
    </div>
  );
}