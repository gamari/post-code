import { TopAboutSection } from "@/src/components/top/top-about-section";
import { TopLatestCodesSection } from "@/src/components/top/top-latest-codes-section";
import { TopFooter } from "@/src/components/top/top-footer";
import { TopFavoriteCodesSection } from "@/src/components/top/top-favorite-codes-section";

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
