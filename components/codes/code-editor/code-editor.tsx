"use client";

import React, { FunctionComponent } from "react";

import { BadCode } from "@/libs/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useSupabase } from "@/components/providers/supabase-provider/supabase-provider";
import { fetchMyself } from "@/libs/externals/supabase/queries";
import { fetchUpdateBadCode } from "@/libs/externals/supabase/queries/bad-codes";
import { Textarea } from "@/components/ui/textarea";
import { Typo } from "@/components/common/typo/typo";
import { useBadCodeForm } from "@/hooks/bad-codes/use-bad-code-form";

interface Props {
  code: BadCode;
}

export const CodeEditor: FunctionComponent<Props> = ({ code: initCode }) => {
  const router = useRouter();
  const { client } = useSupabase();
  const { id, title, setTitle, description, setDescription } =
    useBadCodeForm(initCode);

  const handleSave = async () => {
    if (!client) return;

    const user = await fetchMyself(client);

    if (!user?.id) return;

    // @ts-ignore
    await fetchUpdateBadCode({ id, title }, client);

    router.refresh();
    router.push(`/codes/${id}/detail`);
  };

  return (
    <div className="flex flex-row gap-4">
      <div className="w-[400px]">
        <div>
          <Input
            type="text"
            placeholder="タイトル"
            value={title || ""}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mt-6">
          <Textarea
            value={description || ""}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="説明"
            rows={8}
          />
        </div>

        <div className="mt-6">
          <Typo text="コード" type="h3" className="text-gray-700" />

          {/* TODO fileをサイドバーから選択して、 */}
        </div>
      </div>

      <div className="w-[180px] border p-6 rounded-md ">
        <div>ファイル一覧</div>

        <div>
          <Button>ファイル追加</Button>
        </div>

        <div className="mt-10">
          <Button onClick={handleSave}>保存</Button>
        </div>
      </div>
    </div>
  );
};
