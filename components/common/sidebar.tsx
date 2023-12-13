import React from "react";
import Link from "next/link";

import { Button } from "@/components/common/ui/button";
import { getServerClient } from "@/libs/externals/supabase/admin-client";
import { redirect } from "next/navigation";
import { SideLink } from "./client/SideLink";

export const Sidebar = () => {
  const signOut = async () => {
    "use server";
    const supabase = getServerClient();

    await supabase.auth.signOut();
    return redirect("/login");
  };

  return (
    <aside className="w-[300px] p-5 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold text-gray-700">メニュー</h3>

        <div>
          <div className="flex flex-col space-y-3 py-3">
            <SideLink url="/dashboard" label="ダッシュボード" />
            <SideLink url="/dashboard/account" label="アカウント設定" />
          </div>
        </div>
      </div>

      <div>
        <form action={signOut}>
          <Button type="submit" variant="outline" className="w-full">
            ログアウト
          </Button>
        </form>
      </div>
    </aside>
  );
};
