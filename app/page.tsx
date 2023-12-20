import { TopAboutSection } from "@/app/_components/top-about-section";
import { TopLatestCodesSection } from "@/app/_components/top-latest-codes-section";
import { TopFooter } from "@/app/_components/top-footer";
import { TopFavoriteCodesSection } from "@/app/_components/top-favorite-codes-section";

export default async function Index() {
  return (
    <>
      <TopLatestCodesSection />
      <TopAboutSection />
      <TopFavoriteCodesSection />
      <TopFooter />
    </>
  );
}
