"use client";

import React, { useEffect } from "react";

import Prism from "prismjs";

import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";

import { File } from "@/src/types";
import { cn } from "@/src/libs/utils";
import { CiFileOn } from "react-icons/ci";

interface Props {
  file: File;
  className?: string;
}

export const CodePreviewer = ({ file, className }: Props) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [file]);

  return (
    <div
      className={cn(
        "h-full w-full rounded-lg flex flex-col relative",
        className
      )}
    >
      <div className=" absolute -top-3 left-1 border border-gray-400 shadow-md z-20 text-sm p-1 px-2 bg-white border-b flex flex-row items-center">
        <CiFileOn className="cursor-pointer hover:opacity-70" />
        <span>{file?.name}</span>
      </div>
      <pre className="line-numbers p-4 bg-gray-800 text-white overflow-x-auto flex-1">
        {/* TODO languageを入れる */}
        <code className={`language-js`}>{file.content}</code>
      </pre>
    </div>
  );
};
