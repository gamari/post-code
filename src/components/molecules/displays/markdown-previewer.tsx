"use client";

import React, { useEffect } from "react";

import ReactMarkdown from "react-markdown";
import "highlight.js/styles/github.css";
import remarkGfm from "remark-gfm";

import rehypeSanitize from "rehype-sanitize";

import "./markdown-previewer.css";
import Script from "next/script";

export const MarkdownPreviewer = ({ content }: { content: string }) => {
  useEffect(() => {
    // TODO ここら辺の処理をプロバイダーに移行するか検討する
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const renderTweet = (uri: string) => {
    return (
      <blockquote className="twitter-tweet">
        <a href={uri}></a>
      </blockquote>
    );
  };

  return (
    <div className="markdown-body w-full">
      <ReactMarkdown
        children={content}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSanitize]}
        className="markdown-body"
        components={{
          a: ({ href, children }) => {
            console.log(href);
            if (href?.includes("https://twitter.com")) {
              return renderTweet(href);
            }
            return <a href={href}>{children}</a>;
          },
        }}
      />
      <Script
        src="https://platform.twitter.com/widgets.js"
        strategy="lazyOnload"
      />
    </div>
  );
};
