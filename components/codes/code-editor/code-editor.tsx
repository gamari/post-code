"use client";

import React, { FunctionComponent, useState } from "react";

import { BadCode } from "@/libs/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getBrowserClient } from "@/libs/externals/supabase/client";
import { useRouter } from "next/navigation";

interface Props {
  code: BadCode;
}

export const CodeEditor: FunctionComponent<Props> = ({ code: initCode }) => {
  const router = useRouter();
  const [code, setCode] = useState(initCode);
  const client = getBrowserClient();

  const handleSave = async () => {
    const {
      data: { user },
    } = await client.auth.getUser();

    if (!user?.id) return;

    const { error } = await client
      .from("bad_codes")
      .update(code)
      .eq("id", code.id);

    if (error) return;

    router.refresh();
    router.push(`/dashboard/code/${code.id}`);
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
