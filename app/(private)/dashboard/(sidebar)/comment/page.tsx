import React from "react";

import { Heading } from "@/src/components/atoms/texts/heading";
import { LatestCommentList } from "./latest-comment-list";

const Page = () => {
  return (
    <div className="p-10">
      <Heading className="mb-6">あなたがしたコメント</Heading>

      <LatestCommentList />
    </div>
  );
};

export default Page;
