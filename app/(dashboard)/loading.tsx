import { Loader } from "@/src/components/base/loader";
import React from "react";

const DashboardLoading = () => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <Loader size="lg" />
    </div>
  );
};

export default DashboardLoading;
