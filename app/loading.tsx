import { Loader } from "@/src/components/base/loader";
import React from "react";

const Loading = () => {
  return (
    <div className="fixed bottom-6 left-6">
      <Loader />
    </div>
  );
};

export default Loading;
