"use client";

import { useState } from "react";
import Plus from "lucide-react/dist/esm/icons/plus";

export default function Header() {
  // Get time-based greeting

  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">
              AI Avatar Dashboard
            </h1>
          </div>
          <div className="mt-4 md:mt-0 flex items-center space-x-2">
            {/* <div className="bg-white bg-opacity-20 rounded-lg px-4 py-2 backdrop-blur-sm">
              <span className="text-sm text-black font-medium">3 Avatars</span>
            </div> */}
            <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-indigo-600 font-bold text-2xl">
              A
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
