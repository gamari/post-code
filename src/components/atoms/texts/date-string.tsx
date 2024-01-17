import dayjs from "dayjs";
import React from "react";

interface Props {
  value?: string | null;
  type?: "date" | "datetime";
  className?: string;
}

export const DateString = ({ value, type = "date", className }: Props) => {
  if (!value) return <></>;

  if (type == "datetime")
    return (
      <span className={className}>
        {dayjs(value, "Asia/Tokyo").format("YYYY/MM/DD HH:mm")}
      </span>
    );

  return <span className={className}>{dayjs(value, "Asia/Tokyo").format("YYYY/MM/DD")}</span>;
};
