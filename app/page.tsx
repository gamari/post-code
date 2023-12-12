import { CodeLatestList } from "@/components/codes/code-latest-list";
import { Typo } from "@/components/common/typo";
import { TopHero } from "@/components/top/TopHero";

export default async function Index() {
  return (
    <>
      <div className="mx-auto max-w-3xl w-full py-12">
        <TopHero />

        <section className="w-full mt-20">
          <Typo type="h1" text="最新" />

          <CodeLatestList className="mt-6" />
          <div>
            <Typo type="h4" text="もっと見る" className="text-center mt-6" />
          </div>
        </section>

        <section className="mt-20">
          <Typo type="h1" text="人気" />
        </section>
      </div>

      <footer className="border-t">
        <div className="max-w-7xl mx-auto flex flex-row">
          <div>left</div>
          <div>right</div>
        </div>
      </footer>
    </>
  );
}
