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
      <Card>
        <CardHeader className="flex flex-row items-center">
          <CreateCodeButton />
        </CardHeader>
      </Card>

      <Tabs defaultValue="codes" className="mt-10">
        <TabsList>
          <TabsTrigger value="codes">コード</TabsTrigger>
          <TabsTrigger value="favorites">お気に入り</TabsTrigger>
        </TabsList>
        <TabsContent value="codes">
          <Typo text="作成したコード" type="h2" className="mt-8 mb-6" />

          <Suspense fallback={<Skeleton />}>
            <DashboardCodeList />
          </Suspense>
        </TabsContent>
        <TabsContent value="favorites">お気に入りページ</TabsContent>
      </Tabs>
    </div>
  );
};

export default DashboardPage;
