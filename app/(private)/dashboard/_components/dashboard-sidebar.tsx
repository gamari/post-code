import React from "react";

import { SideLink } from "./SideLink";

export const DashboardSidebar = () => {
  return (
    <div className="w-[240px]">
      <aside className="sticky top-[100px] h-screen/50 flex flex-col justify-between border shadow-lg rounded-lg  bg-white">
        <div className="px-6 py-8">
          <h3 className="text-xl font-bold text-gray-700">メニュー</h3>

          <div>
            <div className="flex flex-col space-y-3 py-3">
              <SideLink url="/dashboard" label="コード" />
              <SideLink url="/dashboard/comment" label="コメント" />
              {/* <SideLink url="/dashboard/notify" label="通知" /> */}
              <SideLink url="/dashboard/account" label="アカウント設定" />
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};
