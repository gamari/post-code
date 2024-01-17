import React from "react";

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
dayjs.extend(utc);
dayjs.extend(timezone);


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
        {dayjs(value).tz("Asia/Tokyo").format("YYYY/MM/DD HH:mm")}
      </span>
    );

  return <span className={className}>{dayjs(value).tz("Asia/Tokyo").format("YYYY/MM/DD")}</span>;
};
