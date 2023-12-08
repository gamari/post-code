import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export const Sidebar = () => {
  return (
    <aside className="w-[300px] p-5">
      <h3 className="text-xl font-bold text-gray-700">メニュー</h3>

      <div>
        <ul className="flex flex-col space-y-3 py-3">
          <li>
            <Button asChild variant="outline" className="w-full">
              <Link href="/dashboard">ダッシュボード</Link>
            </Button>
          </li>
          <li>コード一覧</li>
        </ul>
      </div>
    </aside>
  );
};
