import { CodePanel } from "@/components/codes/code-panel/code-panel";
import { MockBlock } from "@/components/common/mock-block/mock-block";
import { Typo } from "@/components/common/typo/typo";
import { getServerClient } from "@/libs/externals/supabase/admin-client";
import { fetchLatestBadCodes } from "@/libs/externals/supabase/queries/bad-codes";
import Link from "next/link";

export default async function Index() {
  const client = await getServerClient();
  const codes = await fetchLatestBadCodes(client);

  return (
    <div className="mx-auto max-w-3xl w-full py-12">
      <section>
        <div>
          <Typo type="h1" text="悪いコードから学ぶ" />
          <Typo type="p" text="このサイトでは悪いコードを集めて、それを「真似しない」または「議論する」ことを目的に立ち上げました。" className="mt-6" />
        </div>
      </section>

      <section className="w-full mt-20">
        <Typo type="h1" text="最新" />

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {codes.map((code) => (
            <Link href={`/codes/${code.id}/detail`} key={code.id}>
              <CodePanel
                key={code.id}
                code={code}
                className="cursor-pointer hover:opacity-80"
              />
            </Link>
          ))}
        </div>
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
