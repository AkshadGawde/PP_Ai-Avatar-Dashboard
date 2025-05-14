"use client";

import { Edit } from "lucide-react";

export default function AvatarCard({ avatar }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-600 to-transparent opacity-20"></div>
        <img
          src={avatar.avatar}
          alt={avatar.first_name}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-800">
            {avatar.first_name} {avatar.last_name}
          </h2>
          <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full font-medium">
            AI Avatar
          </span>
        </div>
        <p className="text-gray-600 mt-2 text-sm">{avatar.email}</p>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center">
            <span className="inline-block h-3 w-3 rounded-full bg-green-500 mr-2"></span>
            <span className="text-sm text-gray-600">Active</span>
          </div>
          <button className="flex items-center space-x-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-medium py-2 px-4 rounded-lg transition-colors duration-200">
            <Edit size={16} className="mr-1" />
            <span>Edit</span>
          </button>
        </div>
      </div>
    </div>
  );
}
