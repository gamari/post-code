"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { fetchCreateBadCode } from "@/libs/externals/supabase/queries";
import { getBrowserClient } from "@/libs/externals/supabase/client";

// TODO SSRで書く
export const CreateCodeButton = () => {
  const router = useRouter();

  const handleCreateCode = async (e: any) => {
    const supabase = getBrowserClient();
    // TODO fix type
    const newBadCode: any = {
      title: "bad code",
    };

    const retBadCode = await fetchCreateBadCode(newBadCode, supabase);

    router.refresh();

    if (retBadCode) {
      router.push(`/dashboard/codes/${retBadCode.id}/edit`);
    }
  };

  return <Button onClick={handleCreateCode}>コード作成</Button>;
};
