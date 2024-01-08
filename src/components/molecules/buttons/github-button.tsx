import React from "react";
import { GithubIcon } from "../../atoms/icons/github-icon";
import { cn } from "@/src/libs/utils";

interface Props {
  className?: string;
  onClick?: () => void;
  label?: string;
}

export const GithubButton = ({ label, className, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full flex items-center bg-white border border-gray-300 rounded-lg px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none",
        className
      )}
      type="button"
    >
      <GithubIcon />
      <span>{label}</span>
    </button>
  );
};
