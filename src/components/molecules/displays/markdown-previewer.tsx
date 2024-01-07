"use client";

import React from "react";
import Image from "next/image";

import ReactMarkdown from "react-markdown";
import "highlight.js/styles/github.css";
import remarkGfm from "remark-gfm";

import rehypeSanitize from "rehype-sanitize";

import "github-markdown-css"

export const MarkdownPreviewer = ({ content }: { content: string }) => {
  return (
    <div className="markdown-body w-full">
      <ReactMarkdown
        children={content}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSanitize]}
      />
    </div>
  );
};
