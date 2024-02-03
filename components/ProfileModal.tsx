import { useState } from "react";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profileData: {
    name?: string;
    imageSrc?: string;
    // Add more fields as needed
  };
}

export default function ProfileModal({
  isOpen,
  onClose,
  profileData,
}: ProfileModalProps) {
  // Add more state or logic as needed for the modal content

  return (
    // Your modal JSX structure
    <div
      className={`h-[100vh] w-[100vw] bg-black opacity-50 fixed z-10 ${
        isOpen ? "visible" : "hidden"
      }`}
    >
      <div className="inset-0 fixed">
        <button onClick={onClose}>Close</button>
        <img src={profileData.imageSrc} alt={profileData.name} />
        <h2>{profileData.name}</h2>
      </div>
    </div>
  );
}
