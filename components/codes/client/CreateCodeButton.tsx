"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { fetchCreateBadCode } from "@/libs/externals/supabase/queries/bad-codes";
import { useSupabase } from "@/components/providers/supabase-provider/supabase-provider";

// TODO SSRで書く
export const CreateCodeButton = () => {
  const router = useRouter();
  const { client } = useSupabase();

  const handleCreateCode = async (e: any) => {
    if (!client) throw new Error("接続できません。");

    // TODO fix type
    const newBadCode: any = {
      title: "bad code",
    };

    const retBadCode = await fetchCreateBadCode(newBadCode, client);

    router.refresh();

    if (retBadCode) {
      router.push(`/dashboard/codes/${retBadCode.id}/edit`);
    }
  };

  return <Button onClick={handleCreateCode}>コード作成</Button>;
};
