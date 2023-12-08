"use client";

import React, { FunctionComponent, useState } from "react";

import { BadCode } from "@/libs/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

interface Props {
  code: BadCode;
}

export const CodeEditor: FunctionComponent<Props> = ({ code: initCode }) => {
  const supabase = createClientComponentClient();

  const [code, setCode] = useState(initCode);

  const handleSave = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user?.id) return;

    const { error } = await supabase
      .from("bad_codes")
      .update(code)
      .eq("id", code.id);

    console.log(error);
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
