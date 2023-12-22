import React from "react";

interface Props {
  className?: string;
  rows?: number;
}

export const Skeleton = ({ className, rows = 3 }: Props) => {
  return (
    <div className={`flex flex-col space-y-4 p-10 ${className}`}>
      {rows &&
        [...Array(rows)].map((_, i) => (
          <div
            key={i}
            className="h-4 w-full bg-gray-200 animate-pulse rounded"
          ></div>
        ))}
    </div>
  );
};
