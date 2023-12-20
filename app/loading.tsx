import React from "react";

import { Loader } from "@/src/components/molecules/displays/Loader";

const Loading = () => {
  return (
    <div className="fixed bottom-10 left-10">
      <Loader />
    </div>
  );
};

export default Loading;
