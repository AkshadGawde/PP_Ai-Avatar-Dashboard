"use client";

import { X } from "lucide-react";

export default function CreateAvatarModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-11/12 max-w-md overflow-hidden transition-all duration-300 transform animate-fadeIn">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-4 px-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-white">Create New Avatar</h2>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="mb-5">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter avatar name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
            />
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Upload Image
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-indigo-500 transition-all duration-200 cursor-pointer">
              <div className="flex flex-col items-center">
                <svg
                  className="w-12 h-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <p className="mt-2 text-sm text-gray-600">
                  Drag and drop or click to upload
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  SVG, PNG, JPG or GIF (MAX. 800x800px)
                </p>
              </div>
              <input type="file" className="hidden" />
            </div>
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Personality
            </label>
            <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200">
              <option value="">Select personality type</option>
              <option value="friendly">Friendly</option>
              <option value="professional">Professional</option>
              <option value="creative">Creative</option>
              <option value="energetic">Energetic</option>
            </select>
          </div>

          <div className="flex justify-end space-x-3 mt-6">
            <button
              onClick={onClose}
              className="px-5 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-lg transition-colors duration-200"
            >
              Cancel
            </button>
            <button className="px-5 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
              Create Avatar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
