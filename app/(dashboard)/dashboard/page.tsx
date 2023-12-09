import React, { Suspense } from "react";

import { CreateCodeButton } from "../../../components/codes/create-code-button/create-code-button";
import { CodeList } from "@/components/codes/code-list/code-list";
import { Card, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/common/skeleton/skeleton";
import { Typo } from "@/components/common/typo/typo";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DashboardPage = async () => {
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
            <CodeList />
          </Suspense>
        </TabsContent>
        <TabsContent value="favorites">お気に入りページ</TabsContent>
      </Tabs>
    </div>
  );
};

export default DashboardPage;
