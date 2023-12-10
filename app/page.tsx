import { CodeLatestList } from "@/components/codes/code-latest-list";
import { Typo } from "@/components/common/typo/typo";

export default async function Index() {
  return (
    <div className="mx-auto max-w-3xl w-full py-12">
      <section>
        <div>
          <Typo type="h1" text="悪いコードから学ぶ" />
          <Typo
            type="p"
            text="このサイトでは悪いコードを集めて、それを「真似しない」または「議論する」ことを目的に立ち上げました。"
            className="mt-6"
          />
        </div>
      </section>

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
  );
}
