"use client";

import React from "react";

import ReactMarkdown from "react-markdown";
import "highlight.js/styles/github.css";
import remarkGfm from "remark-gfm";

import rehypeSanitize from "rehype-sanitize";

import "./markdown-previewer.css";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { OgpCard } from "../../organisms/OgpCard";

export const MarkdownPreviewer = ({ content }: { content: string }) => {
  const renderTweet = (uri: string) => {
    const tweetId = uri.split("/").pop();
    if (tweetId) {
      return <TwitterTweetEmbed tweetId={tweetId} />;
    } else {
      return <div>読み込みに失敗しました</div>;
    }
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
            if (href?.includes("https://twitter.com")) {
              if (href?.includes("/status/")) {
                return renderTweet(href);
              }
              // Accountページをいれたい
            }

            if (
              (href && href?.includes("https://post-codes.net/codes")) ||
              href?.includes("http://localhost:3000/codes")
            ) {
              return <OgpCard url={href} />;
            }

            return <a href={href}>{children}</a>;
          },
        }}
      />
    </div>
  );
};
