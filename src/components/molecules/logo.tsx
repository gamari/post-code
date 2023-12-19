import React from "react";
import Link from "next/link";
import { AiOutlineThunderbolt } from "react-icons/ai";

export const Logo = () => {
  return (
    <Link href="/" className="flex flex-row gap-2 items-center">
      <AiOutlineThunderbolt className="h-7 w-7" />
      <span className="text-xl text-gray-800 font-bold">BadCodes</span>
    </Link>
  );
};
