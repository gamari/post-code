"use client";

import React, { FunctionComponent } from "react";

import { CodeEditorSidebar } from "./sidebar/CodeEditorSidebar";
import { CodeEditorProvider } from "@/src/contexts/editors/CodeEditorProvider";
import { CodeDetail } from "@/src/types";
import { Flex } from "@/src/components/atoms/containers/Flex";
import { CodeEditorContent } from "./content/CodeEditorContent";
import { useSupabase } from "@/src/contexts/SupabaseProvider";
import { NoContent } from "@/src/components/molecules/displays/no-content";
import { CodeEditorSelectedFileProvider } from "@/src/contexts/editors/CodeEditorSelectedFileProvider";
import { CodeEditorFilesProvider } from "@/src/contexts/editors/CodeEditorFilesProvider";
import { CodeEditorSaveShortcut } from "./save/CodeEditorSaveShortcut";
import { CodeEditorSaveModal } from "./modal/CodeEditorSaveModal";
import { CodeEditorModalProvider } from "@/src/contexts/CodeEditorModalProvider";
import { CodeEditorNewFileModal } from "./modal/CodeEditorNewFileModal";

interface Props {
  code: CodeDetail;
  className?: string;
}

export const CodeEditor: FunctionComponent<Props> = ({
  code,
  className,
}: Props) => {
  const { authUser } = useSupabase();

  if (code?.user_id !== authUser?.id) {
    return <NoContent>編集対象がありません</NoContent>;
  }

  return (
    <CodeEditorProvider code={code}>
      <CodeEditorSelectedFileProvider>
        <CodeEditorFilesProvider code={code}>
          <CodeEditorModalProvider>
            <Flex gap={16} className={className}>
              <CodeEditorContent className="w-[700px]" />
              <CodeEditorSidebar className="w-[250px]" />
              <CodeEditorSaveModal />
              <CodeEditorNewFileModal />
            </Flex>
            <CodeEditorSaveShortcut />
          </CodeEditorModalProvider>
        </CodeEditorFilesProvider>
      </CodeEditorSelectedFileProvider>
    </CodeEditorProvider>
  );
};
