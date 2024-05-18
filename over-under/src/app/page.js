"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return homeScreen();
}

function homeScreen() {
  return (
    <div className="container">
      <div className="topNavBar">
        <h1 className="topNavBarHeader">Over Under</h1>
        <ul className="topNavBarButtons">
          <li> <a href="https://duckduckgo.com/" target="_blank"> Home </a> </li>
          <li> <a href="https://github.com/EliteMicah/Over-Under" target="_blank"> GitHub </a> </li>
          <li> <a href="https://www.linkedin.com/in/micahwoodring/" target="_blank"> LinkedIn </a> </li>
        </ul>
      </div>

      <div className="middleContent">
        <div className="cardsContainer">
            <div className="card a">
              <p className="cardName">Create</p>
              <p className="cardText">Create a game with your friends!</p>
            </div>
            <div className="card b">
              <p className="cardName">Join</p>
              <p className="cardText">Join a game and begin playing!</p>
            </div>
        </div>
      </div>
    </div>
  );
}