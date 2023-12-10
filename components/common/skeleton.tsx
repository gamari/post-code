import React from "react";

export const Skeleton = () => {
  return (
    <div className="flex flex-col space-y-4 p-10">
      <div className="h-4 w-full bg-gray-200 animate-pulse rounded"></div>
      <div className="h-4 w-full bg-gray-200 animate-pulse rounded"></div>
      <div className="h-4 w-full bg-gray-200 animate-pulse rounded"></div>
    </div>
  );
};
