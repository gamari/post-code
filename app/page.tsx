import { unstable_noStore } from "next/cache";

import { TopAboutSection } from "@/app/_components/top-about-section";
import { TopLatestCodesSection } from "@/app/_components/codes/top-latest-codes-section";
import { TopFooter } from "@/app/_components/top-footer";
import { Suspense } from "react";
import { Skeleton } from "@/src/components/molecules/displays/skeleton";
import { TopLatestCommentSection } from "./_components/top-latest-comment-section";


export default async function Index() {
  unstable_noStore();

  return (
    <div className="flex flex-col items-center">
      <Suspense fallback={<Skeleton rows={5} className="w-[600px] pt-10" />}>
        <TopLatestCodesSection />
        <TopAboutSection />
        <TopLatestCommentSection />
        <TopFooter />
      </Suspense>
    </div>
  );
}
