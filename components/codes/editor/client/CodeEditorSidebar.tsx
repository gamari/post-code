"use client";

import React from "react";

import { CiCirclePlus } from "react-icons/ci";

import { Button } from "@/components/common/ui/button";
import { File } from "@/libs/types";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/common/ui/input";
import { CodeFileList } from "../../client/CodeFileList";
import { MdSave } from "react-icons/md";
import { useCodeEditor } from "@/components/providers/CodeEditorProvider";
import { useToast } from "@/components/ui/use-toast";

interface Props {
  files: File[];
  onClickAddFile: () => void;
  onClickSave: () => void;
}

export const CodeEditorSidebar = ({
  files,
  onClickAddFile,
  onClickSave,
}: Props) => {
  const { toast } = useToast();
  const { selectedFile, updateFile, setSelectedFile } = useCodeEditor();

  const [name, setName] = React.useState("");
  const handleAddFile = () => {
    // TODO ファイル作成失敗のToastを出す
    onClickAddFile();
    setName("");
  };

  const handleClickFile = (file: File) => {
    if (selectedFile && !selectedFile?.name) {
      toast({
        title: "ファイル名を入力してください",
      });
      return;
    }

    if (selectedFile?.id === file.id) return;
    if (selectedFile?.id !== file.id && selectedFile?.content) {
      updateFile(selectedFile);
    }
    setSelectedFile(file);
  };

  return (
    <div className="w-[250px] h-fit border p-6 rounded-md ">
      <div className="flex flex-row gap-2">
        <span>ファイル一覧</span>

        <Dialog>
          <DialogTrigger>
            <CiCirclePlus className="h-6 w-6 cursor-pointer hover:opacity-70" />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>ファイル作成</DialogTitle>
              <DialogDescription>
                <div>
                  <Input
                    type="text"
                    placeholder="ファイル名を入力してください"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </DialogDescription>
            </DialogHeader>

            <DialogFooter>
              <DialogClose asChild>
                <Button onClick={handleAddFile}>作成</Button>
              </DialogClose>
              <DialogClose asChild>
                <Button variant="outline">閉じる</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="mt-6 flex flex-col gap-2 max-h-[400px] overflow-auto">
        <CodeFileList
          files={files}
          selectedFile={selectedFile}
          onClickFile={handleClickFile}
        />
      </div>

      <div className="mt-6">
        <Button onClick={onClickSave} className="w-full">
          <MdSave className="h-4 w-4 mr-2" />
          保存
        </Button>
      </div>
    </div>
  );
};
