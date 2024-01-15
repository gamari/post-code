import React from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { OgpCard } from "../../OgpCard";

interface Props {
  href?: string;
  children: React.ReactNode;
}

export const MarkdownPreviewerATag = ({ href, children }: Props) => {
  const renderTweet = (uri: string) => {
    const tweetId = uri.split("/").pop();
    if (tweetId) {
      return <TwitterTweetEmbed tweetId={tweetId} />;
    } else {
      return <div>読み込みに失敗しました</div>;
    }
  };

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
};
