import React from "react";
import { unstable_noStore as noStore } from "next/cache";

import { DashboardPage } from "@/src/components/dashboard/dashboard-page";

const Page = async () => {
  noStore();

  return <DashboardPage />;
};

export default Page;
