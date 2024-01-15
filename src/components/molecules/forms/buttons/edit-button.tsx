import React from "react";
import { MdModeEdit } from "react-icons/md";

interface Props {
  onClick: () => void;
}

export const EditButton = ({ onClick }: Props) => {
  return (
    <div
      className=" p-2 rounded-full border text-gray-600 cursor-pointer hover:bg-sky-200 hover:text-sky-700 hover:border-sky-200"
      onClick={onClick}
    >
      <MdModeEdit className="h-4 w-4" />
    </div>
  );
};
