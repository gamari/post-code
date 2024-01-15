"use client";

import React, { FunctionComponent } from "react";

import { CodeEditorSidebar } from "./sidebar/CodeEditorSidebar";
import { CodeEditorProvider } from "@/app/(private)/dashboard/(non-sidebar)/codes/[code_id]/edit/_contexts/CodeEditorProvider";
import { CodeDetail } from "@/src/types";
import { Flex } from "@/src/components/atoms/containers/Flex";
import { CodeEditorContent } from "./content/CodeEditorContent";
import { useSupabase } from "@/src/contexts/SupabaseProvider";
import { NoContent } from "@/src/components/molecules/displays/no-content";
import { CodeEditorSelectedFileProvider } from "@/app/(private)/dashboard/(non-sidebar)/codes/[code_id]/edit/_contexts/CodeEditorSelectedFileProvider";
import { CodeEditorSaveShortcut } from "./save/CodeEditorSaveShortcut";
import { CodeEditorSaveModal } from "./modal/CodeEditorSaveModal";
import { CodeEditorModalProvider } from "@/app/(private)/dashboard/(non-sidebar)/codes/[code_id]/edit/_contexts/CodeEditorModalProvider";
import { CodeEditorNewFileModal } from "./modal/CodeEditorNewFileModal";
import { CodeEditorRenameFileModal } from "./modal/CodeEditorRenameFileModal";
import { BottomContainerProvider } from "@/src/contexts/BottomContainerProvider";
import { FilesProvider } from "@/src/contexts/FilesProvider";

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
        <FilesProvider codeId={code?.id}>
          <CodeEditorModalProvider>
            <BottomContainerProvider>
              <Flex gap={16} className={className}>
                <CodeEditorContent className="w-[700px]" />
                <CodeEditorSidebar className="w-[250px]" />

                {/* Modal */}
                <CodeEditorSaveModal />
                <CodeEditorNewFileModal />
                <CodeEditorRenameFileModal />
              </Flex>
            </BottomContainerProvider>
            <CodeEditorSaveShortcut />
          </CodeEditorModalProvider>
        </FilesProvider>
      </CodeEditorSelectedFileProvider>
    </CodeEditorProvider>
  );
};
