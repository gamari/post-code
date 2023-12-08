import React from "react";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <span className="text-lg text-gray-800 font-bold">BadCodes</span>
    </Link>
  );
};
