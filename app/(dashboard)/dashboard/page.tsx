import React, { Suspense } from "react";

import { CreateCodeButton } from "../../../components/codes/create-code-button/create-code-button";
import { CodeList } from "@/components/codes/code-list/code-list";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/common/skeleton/skeleton";

const DashboardPage = async () => {
  return (
    <div>
      <Card className="flex flex-row items-center">
        <CardContent>
          <CreateCodeButton />
        </CardContent>
      </Card>

      <Suspense fallback={<Skeleton />}>
        <CodeList />
      </Suspense>
    </div>
  );
};

export default DashboardPage;
