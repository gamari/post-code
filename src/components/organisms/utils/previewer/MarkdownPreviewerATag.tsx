import React from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { OgpCard } from "../../OgpCard";

interface Props {
  href?: string;
  children: React.ReactNode;
}

export const MarkdownPreviewerATag = ({ href, children }: Props) => {
  const renderTweet = (uri: string) => {
    // TODO コンポーネント化する
    const tweetId = uri.split("/").pop();
    if (tweetId) {
      return (
        <div className="my-4">
          <TwitterTweetEmbed tweetId={tweetId} />
        </div>
      );
    } else {
      return <div className="my-4">読み込みに失敗しました</div>;
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
    return <OgpCard url={href} className="my-4" />;
  }

  return <a href={href}>{children}</a>;
};
