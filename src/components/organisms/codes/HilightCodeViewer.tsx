import { getFileExtensionType } from "@/src/libs/editors";
import { File } from "@/src/types";
import React from "react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia as style } from "react-syntax-highlighter/dist/esm/styles/prism";

interface Props {
  // code: string;
  file: File;
  query: string;
}

export const HilightCodeViewer = ({ file, query }: Props) => {
  return (
    <SyntaxHighlighter
      language={getFileExtensionType(file?.name)}
      style={style}
      className="p-4 flex-1"
      showLineNumbers
    >
      {file.content || ""}
    </SyntaxHighlighter>
  );
};
