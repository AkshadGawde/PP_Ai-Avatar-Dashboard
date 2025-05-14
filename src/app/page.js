"use client"; // This is a client component
import { useState } from "react";
import Header from "../components/Header";
import AvatarList from "../components/AvatarList";
import CreateAvatarModal from "../components/CreateAvatarModal";
import Plus from "lucide-react/dist/esm/icons/plus";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto py-8 px-6">
        <p className="mt-2 text-2xl font-bold text-center">
          {getGreeting()}, Welcome to DCVerse
        </p>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 ">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mt-10">
              Your Avatars
            </h2>
            <p className="text-gray-600">
              Manage and customize your AI personas
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-md"
            >
              <Plus size={18} className="mr-2" />
              New Avatar
            </button>
          </div>
        </div>

        <AvatarList />
      </main>

      {/* Floating Action Button (Mobile) */}
      <div className="md:hidden fixed bottom-6 right-6">
        <button
          onClick={() => setModalOpen(true)}
          className="h-14 w-14 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg flex items-center justify-center hover:from-indigo-700 hover:to-purple-700 transition-all duration-200"
        >
          <Plus size={24} />
        </button>
      </div>

      <CreateAvatarModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}

export default App;
