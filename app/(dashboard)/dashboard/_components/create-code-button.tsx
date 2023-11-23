"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import { Button } from "@/components/ui/button";

export const CreateCodeButton = () => {
  const router = useRouter();

  const supabase = createClientComponentClient();

  const handleCreateCode = async (e: React.FormEvent) => {
    e.preventDefault();

    const {
      data: { user },
    } = await supabase.auth.getUser();
    console.log(user);

    if (!user?.id) return;

    const { data, error } = await supabase
      .from("bad_codes")
      .insert({
        profile_id: user.id,
      })
      .select();

    console.log(data);

    if (!!data?.length) {
      router.push(`/code/${data[0].id}/edit`);
    }
  };

  return <Button onClick={handleCreateCode}>コード作成</Button>;
};
