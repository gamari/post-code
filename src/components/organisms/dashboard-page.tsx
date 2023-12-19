import React, { Suspense } from "react";

import { CreateCodeButton } from "./CreateCodeButton";
import { Skeleton } from "@/src/components/molecules/displays/skeleton";
import { Typo } from "@/src/components/atoms/typo";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/components/ui/tabs";
import { DashboardCodeList } from "@/src/components/organisms/dashboard/dashboard-code-list";

export const DashboardPage = () => {
  return (
    <Tabs defaultValue="codes" className="p-10">
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
  );
};
