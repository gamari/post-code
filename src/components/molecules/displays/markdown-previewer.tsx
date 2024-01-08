"use client";

import React from "react";

import ReactMarkdown from "react-markdown";
import "highlight.js/styles/github.css";
import remarkGfm from "remark-gfm";

import rehypeSanitize from "rehype-sanitize";

import "./markdown-previewer.css"

export const MarkdownPreviewer = ({ content }: { content: string }) => {
  return (
    <div className="markdown-body w-full">
      <ReactMarkdown
        children={content}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSanitize]}
        className="markdown-body"
      />
    </div>
  );
};
