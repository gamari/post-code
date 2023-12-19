import React from "react";
import { MdDelete } from "react-icons/md";

interface Props {
  onClick: () => void;
  className?: string;
}

export const DeleteButton = ({ onClick }: Props) => {
  return (
    <div
      className=" p-2 rounded-full border text-gray-600 cursor-pointer hover:bg-gray-100"
      onClick={onClick}
    >
      <MdDelete className="h-5 w-5" />
    </div>
  );
};
