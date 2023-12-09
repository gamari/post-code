"use client";

import React, { FunctionComponent, useState } from "react";

import { BadCode } from "@/libs/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getBrowserClient } from "@/libs/externals/supabase/client";
import { useRouter } from "next/navigation";
import { useSupabase } from "@/components/providers/supabase-provider/supabase-provider";
import { fetchMyself } from "@/libs/externals/supabase/queries";
import { fetchUpdateBadCode } from "@/libs/externals/supabase/queries/bad-codes";

interface Props {
  code: BadCode;
}

export const CodeEditor: FunctionComponent<Props> = ({ code: initCode }) => {
  const router = useRouter();
  const [code, setCode] = useState(initCode);
  const { client } = useSupabase();

  const handleSave = async () => {
    if (!client) return;

    const user = await fetchMyself(client);

    if (!user?.id) return;

    // @ts-ignore
    await fetchUpdateBadCode({ id: code.id, title: code.title }, client);

    router.refresh();
    router.push(`/codes/${code.id}/detail`);
  };

  return (
    <div className="flex flex-row gap-4">
      <div className="border p-6 rounded-md w-[300px]">
        <div>
          <Input
            type="text"
            placeholder="タイトル"
            value={code?.title || ""}
            onChange={(e) => setCode({ ...code, title: e.target.value })}
          />
        </div>
        <div>{code.id}</div>
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
