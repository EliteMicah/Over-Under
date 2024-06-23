"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="m-0 box-border p-0">
      <div className="flex fixed overflow-hidden top-0 h-[75px] w-full items-center justify-between bg-neutral-800 z-50">
        <h1 className="m-5 font-bold text-2xl font-times text-white">
          <Link href="http://localhost:3000" target="_blank">
            Over Under
          </Link>
        </h1>
        <ul className="flex px-3 items-center text-white m-5">
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

      <cardNav />
      <div className="relative pt-[75px] w-lvw h-lvh bg-gray-600 bg-gradient-to-b from-[#0e1419] to-[#292929]">
        <div className="flex gap-4 items-center justify-center">
          <Link
            href="/create-game"
            className="m-6 box-border square-card items-center justify-center bg-sky-500 rounded-xl py-2 
            hover:bg-opacity-90 focus:scale-95 transition-all duration-75 ease-out shadow-sm flex flex-col hover:scale-105
            max-h-full max-w-full overflow-hidden text-center"
          >
            <h2 className="text-6xl font-impact drop-shadow-lg text-gray-950">
              Create
            </h2>
            <p className="text-slate-300 text-lg p-4 drop-shadow-lg">
              Create a game to play with your friends!
            </p>
          </Link>

          <Link
            href="/join-game"
            className="m-6 box-border square-card items-center justify-center bg-sky-500 rounded-xl py-2 
            hover:bg-opacity-90 focus:scale-95 transition-all duration-75 ease-out shadow-sm flex flex-col hover:scale-105
            max-h-full max-w-full overflow-hidden text-center"
          >
            <h2 className="text-6xl font-impact drop-shadow-lg text-gray-950">
              Join
            </h2>
            <p className="text-slate-300 text-lg p-4 drop-shadow-lg">
              Join a game to start playing!
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
