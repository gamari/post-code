import React from "react";
import { IoMdClose } from "react-icons/io";

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  onClose?: () => void;
}

export const Modal = ({ children, isOpen, onClose }: Props) => {
  if (!isOpen) return null;

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose?.();
  };

  return (
    <div
      className="fixed inset-0 z-[500] bg-gray-100 bg-opacity-50 flex justify-center items-center"
      onClick={handleBackgroundClick}
    >
      <div className="relative bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
        <IoMdClose className="absolute top-2 right-2 w-6 h-6 hover:opacity-60 cursor-pointer" onClick={handleBackgroundClick} />
        {children}
      </div>
    </div>
  );
};
