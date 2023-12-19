import { TopAboutSection } from "@/src/components/organisms/top/top-about-section";
import { TopLatestCodesSection } from "@/src/components/organisms/top/top-latest-codes-section";
import { TopFooter } from "@/src/components/organisms/top/top-footer";
import { TopFavoriteCodesSection } from "@/src/components/organisms/top/top-favorite-codes-section";

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
