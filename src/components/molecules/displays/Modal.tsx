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
    onClose?.();
  };

  return (
    <div
      className="fixed inset-0 z-[500] bg-gray-100 bg-opacity-50 flex justify-center items-center"
      onClick={handleBackgroundClick}
    >
      <div className="relative bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
        <IoMdClose
          className="absolute top-2 right-2 w-7 h-7 hover:opacity-40 cursor-pointer"
          onClick={handleBackgroundClick}
        />
        {children}
      </div>
    </div>
  );
};
