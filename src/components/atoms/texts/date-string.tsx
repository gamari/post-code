import dayjs from "dayjs";
import React from "react";

interface Props {
  value?: string | null;
  type?: "date" | "datetime";
}

export const DateString = ({ value, type = "date" }: Props) => {
  if (!value) return <></>;

  if (type == "datetime")
    return <span>{dayjs(value).format("YYYY/MM/DD HH:mm")}</span>;

  return <span>{dayjs(value).format("YYYY/MM/DD")}</span>;
};
