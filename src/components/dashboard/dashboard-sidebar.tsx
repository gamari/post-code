import React from "react";

import { FaDoorOpen } from "react-icons/fa6";

import { Button } from "@/src/components/ui/button";
import { getServerClient } from "@/src/libs/externals/supabase/admin-client";
import { redirect } from "next/navigation";
import { SideLink } from "../base/client/SideLink";

export const DashboardSidebar = () => {
  const signOut = async () => {
    "use server";
    const supabase = getServerClient();

    await supabase.auth.signOut();
    return redirect("/login");
  };

  return (
    <aside className="w-[300px] flex flex-col justify-between">
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-700">メニュー</h3>

        <div>
          <div className="flex flex-col space-y-3 py-3">
            <SideLink url="/dashboard" label="ダッシュボード" />
            <SideLink url="/dashboard/account" label="アカウント設定" />
          </div>
        </div>
      </div>

      <div className="border-t">
        <form action={signOut} className="p-5">
          <Button type="submit" variant="outline" className="w-full flex flex-row items-center gap-1">
            <FaDoorOpen className="h-5 w-5" />
            ログアウト
          </Button>
        </form>
      </div>
    </aside>
  );
};
