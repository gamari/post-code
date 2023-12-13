import React, { Suspense } from "react";
import { unstable_noStore as noStore } from "next/cache";

import { CreateCodeButton } from "../../../components/codes/client/CreateCodeButton";
import { Card, CardHeader } from "@/components/common/ui/card";
import { Skeleton } from "@/components/common/skeleton";
import { Typo } from "@/components/common/typo";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/common/ui/tabs";
import { DashboardCodeList } from "@/components/codes/dashboard/dashboard-code-list";

const DashboardPage = async () => {
  noStore();

  return (
    <div className="p-10">
      <Tabs defaultValue="codes" className="mt-10">
        <TabsList className="mb-6">
          <TabsTrigger value="codes">コード</TabsTrigger>
          <TabsTrigger value="favorites">お気に入り</TabsTrigger>
        </TabsList>
        <TabsContent value="codes">
          <div className="flex flex-row items-center gap-2 mb-6">
            <Typo text="作成したコード" type="h2" />
            <CreateCodeButton />
          </div>

          <Suspense fallback={<Skeleton />}>
            <DashboardCodeList />
          </Suspense>
        </TabsContent>
        <TabsContent value="favorites">
          <Typo text="お気に入り一覧" type="h2" />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DashboardPage;
