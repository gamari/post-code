import React from "react";

import { FaDoorOpen } from "react-icons/fa6";

import { Button } from "@/src/components/ui/button";
import { getServerClient } from "@/src/libs/externals/supabase/admin-client";
import { redirect } from "next/navigation";
import { SideLink } from "../base/client/SideLink";

export const DashboardSidebar = () => {


  return (
    <div className="w-[300px] min-h-screen ">
      <aside className="sticky top-[100px] h-screen/50 flex flex-col justify-between">
        <div className="p-5">
          <h3 className="text-xl font-bold text-gray-700">メニュー</h3>

          <div>
            <div className="flex flex-col space-y-3 py-3">
              <SideLink url="/dashboard" label="ダッシュボード" />
              <SideLink url="/dashboard/account" label="アカウント設定" />
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};
