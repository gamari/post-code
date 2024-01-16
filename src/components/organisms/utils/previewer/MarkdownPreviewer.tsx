"use client";

import "highlight.js/styles/github.css";
import "./markdown-previewer.css";

import React from "react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";

import { MarkdownPreviewerATag } from "./MarkdownPreviewerATag";
import { MarkdownPreviewerQuateFile } from "./MarkdownPreviewerQuateFile";
import remarkBreaks from "remark-breaks"

export const MarkdownPreviewer = ({ content }: { content: string }) => {
  return (
    <div className="markdown-body w-full">
      <ReactMarkdown
        children={content}
        remarkPlugins={[remarkGfm, remarkBreaks]}
        rehypePlugins={[rehypeSanitize]}
        className="markdown-body"
        components={{
          a: ({ href, children }) => {
            return (
              <MarkdownPreviewerATag href={href}>
                {children}
              </MarkdownPreviewerATag>
            );
          },
          p: ({ node, children, ...props }) => {
            if (typeof children == "string" && children?.includes("!file[")) {
              const filename = children
                .replace("!file[", "")
                .replace("]", "")
                .trim();
              return <MarkdownPreviewerQuateFile filename={filename} />;
            }
            return <p>{children}</p>;
          },
        }}
      />
    </div>
  );
};
