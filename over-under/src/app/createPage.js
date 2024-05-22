"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

function createGame() {
  // Define your function to handle the click event
  const handleCreateClick = () => {
    // Add your logic here
    console.log("Create card clicked!");
    // For navigation, you can use router.push('/your-path');
  };

  return (
    <div className="top-[75px] bg-gray-600 bg-gradient-to-b from-[#0e1419] to-[#292929]">
      <div className="flex flex-row items-center justify-center min-h-screen container mx-auto my-auto">
        {/* CARD */}
        <CreateCard onClick={handleCreateClick} />
        {/* Other cards */}
      </div>
    </div>
  );
}

export default YourPage;
