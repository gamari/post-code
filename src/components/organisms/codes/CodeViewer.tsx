import React from "react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia as style } from "react-syntax-highlighter/dist/esm/styles/prism";

import { FileType } from "@/src/libs/editors";
import { BaseProps } from "@/src/types/components";

interface Props extends BaseProps {
  language: FileType;
  content?: string;
}

export const CodeViewer = ({
    language,
    className,
    content
}: Props) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={style}
      className={className}
      showLineNumbers
    >
      {content || ""}
    </SyntaxHighlighter>
  );
};
