import React from "react";

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
      className="fixed inset-0 z-[1000] bg-gray-600 bg-opacity-50 flex justify-center items-center"
      onClick={handleBackgroundClick}
    >
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
        {/* TODO 右上にXボタンを置く */}
        {children}
      </div>
    </div>
  );
};
