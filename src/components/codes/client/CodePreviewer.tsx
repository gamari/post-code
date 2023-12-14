"use client";

import React, { useEffect } from "react";

import Prism from "prismjs";

import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/themes/prism-tomorrow.css";

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
        "border h-full w-full rounded-lg overflow-hidden",
        className
      )}
    >
      <div className="p-2 px-5 bg-gray-100 border-b flex flex-row items-center gap-1">
        <CiFileOn className="h-5 w-5 cursor-pointer hover:opacity-70" />
        {file?.name}
      </div>

      <pre className="line-numbers p-4 bg-gray-800 text-white overflow-x-auto h-full">
        {/* TODO languageを入れる */}
        <code className={`language-js`}>{file.content}</code>
      </pre>
    </div>
  );
};
