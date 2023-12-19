import React from "react";
import { MdDelete } from "react-icons/md";

interface Props {
  onClick: () => void;
  className?: string;
}

export const DeleteButton = ({ onClick }: Props) => {
  return (
    <div
      className="p-2 rounded-full border border-red-500 text-red-500 cursor-pointer hover:bg-gray-100"
      onClick={onClick}
    >
      <MdDelete className="h-4 w-4" />
    </div>
  );
};
