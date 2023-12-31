"use client";

import React from "react";
import Image from "next/image";

import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";
import { CodeViewer } from "../../organisms/codes/CodeViewer";
import { FileType } from "@/src/libs/editors";

export const MarkdownPreviewer = ({ content }: { content: string }) => {
  const openImageInNewTab = (src: string) => {
    window.open(src, "_blank");
  };

  return (
    <ReactMarkdown
      className="space-y-4 w-full"
      // rehypePlugins={[rehypeHighlight]}
      components={{
        h1: ({ node, ...props }) => (
          <h1 className="text-3xl font-bold mb-3" {...props} />
        ),
        h2: ({ node, ...props }) => (
          <h2 className="text-2xl font-bold mb-2 border-b" {...props} />
        ),
        h3: ({ node, ...props }) => (
          <h3 className="text-lg font-bold mb-1" {...props} />
        ),
        ul: ({ node, ...props }) => (
          <ul className="list-disc list-inside" {...props} />
        ),
        ol: ({ node, ...props }) => (
          <ol className="list-decimal list-inside" {...props} />
        ),
        li: ({ node, ...props }) => <li className="ml-4" {...props} />,
        img: ({ node, ...props }) => {
          const { src, alt } = props;
          return (
            <Image
              src={src || ""}
              alt={alt || ""}
              width={400}
              height={400}
              onClick={() => {
                if (src) {
                  openImageInNewTab(src);
                }
              }}
              className="cursor-pointer hover:opacity-80 transition-opacity"
            />
          );
        },
        code: ({ ...props }) => {
          const { className, children } = props;
          const language = className?.replace("language-", "") as FileType;
          return (
            <CodeViewer
              language={language}
              content={children as string}
              className="p-4 flex-1 w-full"
            />
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
};
