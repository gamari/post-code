"use client";

import React from "react";

import { Section } from "@/src/components/atoms/containers/section";
import { Heading } from "@/src/components/atoms/texts/heading";
import { LatestProblemCodeList } from "./LatestProblemCodeList";

export const LatestProblemListSection = () => {
  return (
    <Section>
      <Heading className="mb-3">最新問題一覧</Heading>
      <LatestProblemCodeList />
    </Section>
  );
};
