import { CodeLatestList } from "@/src/components/codes/code-latest-list";
import { Typo } from "@/src/components/base/typo";
import { TopHero } from "@/src/components/top/TopHero";

export default async function Index() {
  return (
    <>
      <div className="mx-auto max-w-6xl w-full py-12">
        <TopHero />

        <section className="w-full mt-20">
          <Typo type="h1" text="最新" />

          <CodeLatestList className="mt-6" />
          <div>
            <Typo type="h4" text="もっと見る" className="text-center mt-6" />
          </div>
        </section>

        <section className="mt-20">
          <Typo type="h1" text="言語別" />
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
