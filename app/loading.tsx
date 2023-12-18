import { Loader } from "@/src/components/base/client/Loader";
import React from "react";

const Loading = () => {
  return (
    <div className="fixed bottom-10 left-10">
      <Loader />
    </div>
  );
};

export default Loading;
