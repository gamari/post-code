import React from "react";
import Link from "next/link";

import { AiOutlineThunderbolt } from "react-icons/ai";
import { FaSlash } from "react-icons/fa";
import { TbBackslash } from "react-icons/tb";
import { HiCodeBracket } from "react-icons/hi2";

export const Logo = () => {
  return (
    <Link href="/" className="flex flex-row gap-2 items-center">
      <HiCodeBracket className="h-7 w-7" />
      <span className="text-xl text-gray-800 font-bold">BadCodes</span>
    </Link>
  );
};
