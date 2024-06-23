import React from "react";
import Link from "next/link";

const CreateGame = () => {
  return (
    <div className="container">
      <div className="m-0 box-border p-0">
        <div className="flex fixed overflow-hidden top-0 h-[75px] w-full items-center justify-between bg-neutral-800 z-50">
          <h1 className="m-5 font-bold text-2xl font-times text-white">
            <Link href="http://localhost:3000">Over Under</Link>
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
      </div>
    </div>
  );
};

export default CreateGame;
