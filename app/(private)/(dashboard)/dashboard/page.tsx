import React, { Suspense } from "react";
import { unstable_noStore as noStore } from "next/cache";

import { Skeleton } from "@/src/components/molecules/displays/skeleton";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/components/ui/tabs";
import { DashboardCodeListTab } from "@/app/(private)/(dashboard)/dashboard/dashboard-code-list-tab";
import { DashboardFavoriteCodeListTab } from "@/app/(private)/(dashboard)/dashboard/dashboard-favorite-code-list-tab";

const Page = async () => {
  noStore();

  return (
    <Tabs defaultValue="codes" className="p-10">
      <TabsList className="mb-6">
        <TabsTrigger value="codes">コード</TabsTrigger>
        <TabsTrigger value="favorites">お気に入り</TabsTrigger>
      </TabsList>
      <TabsContent value="codes">
        <Suspense fallback={<Skeleton />}>
          <DashboardCodeListTab />
        </Suspense>
      </TabsContent>
      <TabsContent value="favorites">
        <DashboardFavoriteCodeListTab />
      </TabsContent>
    </Tabs>
  );
};

export default Page;
