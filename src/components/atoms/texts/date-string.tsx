import dayjs from "dayjs";
import React from "react";

interface Props {
  value?: string | null;
}

export const DateString = ({ value }: Props) => {
  if (!value) return <></>;
  return <span>{dayjs(value).format("YYYY/MM/DD")}</span>;
};
