import React from "react";

interface Props {
  className?: string;
  rows?: number;
}

export const Skeleton = ({ className }: Props) => {
  return (
    <div className={`flex flex-col space-y-4 p-10 ${className}`}>
      <div className="h-4 w-full bg-gray-200 animate-pulse rounded"></div>
      <div className="h-4 w-full bg-gray-200 animate-pulse rounded"></div>
      <div className="h-4 w-full bg-gray-200 animate-pulse rounded"></div>
    </div>
  );
};
