import React from "react";
import { MdModeEdit } from "react-icons/md";

interface Props {
  onClick: () => void;
}

export const EditButton = ({ onClick }: Props) => {
  return (
    <div
      className=" p-2 rounded-full border text-gray-600 cursor-pointer hover:bg-gray-100"
      onClick={onClick}
    >
      <MdModeEdit className="h-4 w-4" />
    </div>
  );
};
