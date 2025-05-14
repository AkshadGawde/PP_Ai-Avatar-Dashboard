"use client";

import { useState } from "react";
import Plus from "lucide-react/dist/esm/icons/plus";

export default function Header() {
  // Get time-based greeting
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">
              AI Avatar Dashboard
            </h1>
            <p className="mt-2 opacity-90 font-light">
              {getGreeting()}, Welcome to DCVerse
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center space-x-2">
            {/* <div className="bg-white bg-opacity-20 rounded-lg px-4 py-2 backdrop-blur-sm">
              <span className="text-sm text-black font-medium">3 Avatars</span>
            </div> */}
            <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-indigo-600 font-bold">
              U
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
