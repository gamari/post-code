"use client";

import React from "react";

import { NextPage } from "next";

import { NoContent } from "@/src/components/molecules/displays/no-content";
import { CodeEditor } from "./_components/CodeEditor";
import { useFetchCodeById } from "@/src/hooks/codes/useFetchCodeById";
import { Skeleton } from "@/src/components/molecules/displays/skeleton";

interface Props {
  params: {
    code_id: number;
  };
}

const CodeEditPage: NextPage<Props> = ({ params }) => {
  const { code_id } = params;
  const { code, loading } = useFetchCodeById(code_id);

  if (loading) return <Skeleton className="w-[600px] h-[300px]" />;
  if (!code_id || !code)
    return <NoContent text="コードが見つかりませんでした" />;

  return <CodeEditor code={code} className="p-10 pb-32" />;
};

export default CodeEditPage;
