"use client";

import React, { FunctionComponent } from "react";

import { CodeEditorSidebar } from "./sidebar/CodeEditorSidebar";
import { CodeEditorProvider } from "@/src/contexts/CodeEditorProvider";
import { CodeDetail } from "@/src/types";
import { Flex } from "@/src/components/atoms/containers/Flex";
import { CodeEditorContent } from "./content/CodeEditorContent";
import { useSupabase } from "@/src/contexts/SupabaseProvider";
import { NoContent } from "@/src/components/molecules/displays/no-content";

interface Props {
  code: CodeDetail;
}

export const CodeEditor: FunctionComponent<Props> = ({ code }: Props) => {
  const { authUser } = useSupabase();

  if (code?.user_id !== authUser?.id) {
    return <NoContent>編集対象がありません</NoContent>;
  }

  return (
    <CodeEditorProvider code={code}>
      <Flex gap={16}>
        <CodeEditorContent className="w-[600px]" />
        <CodeEditorSidebar className="w-[250px]" />
      </Flex>
    </CodeEditorProvider>
  );
};
