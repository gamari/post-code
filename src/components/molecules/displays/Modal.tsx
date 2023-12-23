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
    <div className="fixed inset-0 flex items-center justify-center z-[300]">
      <div
        className="h-full border-t absolute inset-0 w-full bg-gray-500 bg-opacity-50 z-[301]"
        onClick={handleBackgroundClick}
      />

      <SlideIn from="bottom" className="w-full max-w-[600px] z-[302]">
        <div className="relative bg-white rounded-lg shadow-xl p-8 pt-12 w-full max-w-md ">
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
