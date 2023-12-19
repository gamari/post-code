"use client";

import React from "react";

import { Audio, Circles, InfinitySpin, TailSpin } from "react-loader-spinner";

interface Props {
  size?: "sm" | "md" | "lg";
}

export const Loader = ({ size = "sm" }: Props) => {
  return (
    <TailSpin
      height="80"
      width="80"
      color="#ccc"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};
