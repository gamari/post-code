import React from "react";
import { IoMdClose } from "react-icons/io";
import { SlideIn } from "../animation/SlideIn";
import { cn } from "@/src/libs/utils";
import { BaseProps } from "@/src/types/components";

interface Props extends BaseProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose?: () => void;
}

export const Modal = ({ children, isOpen, onClose, className }: Props) => {
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

      <SlideIn from="bottom" className="z-[302]">
        <div
          className={cn(
            "max-h-[90vh]  overflow-auto bg-white rounded-lg shadow-xl p-8 pt-12 z-[303]",
            className
          )}
        >
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
