"use client";

import React from "react";
import { useAlert } from "@/src/hooks/useAlert";
import { useRouter } from "next/navigation";
import { useSupabase } from "@/src/contexts/SupabaseProvider";

export const DeleteUserButton = () => {
  const { client } = useSupabase();
  const { infoAlert, errorAlert } = useAlert();
  const handleDelete = async () => {
    if (!client) return;

    const isOk = confirm("このユーザーに紐づくデータが全て削除され、二度と復元できません。本当に削除してもよろしいですか？");
    if (!isOk) return;

    const res = await fetch("/api/delete-user", {
      method: "POST",
    });

    if (!res.ok) {
      errorAlert("削除に失敗しました。");
      return;
    }

    await client.auth.signOut();
    infoAlert("ユーザーを削除しました。");
    window.location.href = "/login";
  };

  return (
    <div
      className="bg-white border-2 border-gray-200 px-4 text-red-500 text-sm cursor-pointer hover:bg-gray-100 p-2 rounded-lg"
      onClick={handleDelete}
    >
      ユーザー削除
    </div>
  );
};
