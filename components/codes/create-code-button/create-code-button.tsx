"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { fetchCreateBadCode } from "@/libs/externals/supabase/queries";
import { getBrowserClient } from "@/libs/externals/supabase/client";
import { BadCode } from "@/libs/types";

// TODO SSRで書く
export const CreateCodeButton = () => {
  const router = useRouter();

  const handleCreateCode = async (e: React.FormEvent) => {
    e.preventDefault();

    const supabase = getBrowserClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user?.id) return;

    // TODO fix type
    const newBadCode: any = {
      title: "bad code",
      user_id: user.id,
    };

    const retBadCode = await fetchCreateBadCode(newBadCode, supabase);

    router.refresh();

    if (retBadCode) {
      router.push(`/dashboard/codes/${retBadCode.id}/edit`);
    }
  };

  return <Button onClick={handleCreateCode}>コード作成</Button>;
};
