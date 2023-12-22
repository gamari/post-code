import { TopAboutSection } from "@/app/_components/top-about-section";
import { TopLatestCodesSection } from "@/app/_components/top-latest-codes-section";
import { TopFooter } from "@/app/_components/top-footer";
import { TopFavoriteCodesSection } from "@/app/_components/top-favorite-codes-section";
import { Suspense } from "react";
import { Skeleton } from "@/src/components/molecules/displays/skeleton";

export default async function Index() {
  return (
    <div className="flex flex-col items-center">
      <Suspense fallback={<Skeleton rows={5} className="w-[600px]" />}>
        <TopLatestCodesSection />
        <TopAboutSection />
        <TopFavoriteCodesSection />
        <TopFooter />
      </Suspense>
    </div>
  );
}
