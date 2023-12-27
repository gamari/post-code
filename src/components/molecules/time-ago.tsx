"use client";

import React from "react";

import ReactTimeago from "react-timeago";

// @ts-ignore
import japaneseStrings from "react-timeago/lib/language-strings/ja";
// @ts-ignore
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";
import { BaseProps } from "@/src/types/components";

interface Props extends BaseProps {
  date?: string | null;
}

// TODO 自作したほうが良いかも
const formatter = buildFormatter(japaneseStrings);

export const TimeAgo = ({ date, className }: Props) => {
  if (!date) return null;
  return (
    <ReactTimeago date={date} formatter={formatter} className={className} />
  );
};
