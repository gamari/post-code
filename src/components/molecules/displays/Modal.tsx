import React from "react";
import { IoMdClose } from "react-icons/io";
import { SlideIn } from "../animation/SlideIn";

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
    <div className="fixed inset-0 z-[300] flex items-center justify-center">
      <div
        className="fixed inset-0 bg-gray-500/50 z-[301]"
        onClick={handleBackgroundClick}
      />

      <SlideIn from="bottom" className="w-full max-w-[600px] z-[302]">
        <div className="relative bg-white rounded-lg shadow-xl p-8 pt-12 w-full max-w-md z-[303]">
          <IoMdClose
            className="absolute top-2 right-2 w-7 h-7 hover:opacity-40 cursor-pointer"
            onClick={handleBackgroundClick}
          />
          {children}
        </div>
      </SlideIn>
    </div>
  );
};
