"use client";

import { useState, useEffect } from "react";
import AvatarCard from "./AvatarCard";
import dummyAvatars from "./dummyAvatars";

export default function AvatarList() {
  const [avatars, setAvatars] = useState([]);
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(null);

  useEffect(() => {
    // simulate loading
    const timeout = setTimeout(() => {
      setAvatars(dummyAvatars.slice(0, 3)); // use first 3 only
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {avatars.map((avatar) => (
        <AvatarCard key={avatar.id} avatar={avatar} />
      ))}
    </div>
  );
}
