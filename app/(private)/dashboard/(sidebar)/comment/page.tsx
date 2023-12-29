import { Heading } from "@/src/components/atoms/texts/heading";
import React from "react";
import { LatestCommentList } from "./latest-comment-list";
import { unstable_noStore } from "next/cache";

const Page = () => {
  unstable_noStore();

  return (
    <div className="p-10">
      <Heading className="mb-6">あなたがしたコメント</Heading>

      <LatestCommentList />
    </div>
  );
};

export default Page;
