"use client";

import React from "react";
import { CiCirclePlus } from "react-icons/ci";

import {
  DialogHeader,
  DialogFooter,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/src/components/ui/dialog";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { fetchAuthUser } from "@/src/libs/externals/supabase/queries/users";
import { useSupabase } from "@/src/components/providers/supabase-provider/supabase-provider";
import { useCodeEditor } from "@/src/components/providers/CodeEditorProvider";
import { fetchCreateFile } from "@/src/libs/externals/supabase/queries/files";

export const CodeEditorFileDialog = () => {
  const { client } = useSupabase();
  const { badCode, addFile,  setSelectedFile } = useCodeEditor();

  const [name, setName] = React.useState("");

  const handleAddFile = async () => {
    if (!client) return;

    const user = await fetchAuthUser(client);

    if (!user?.id) return;

    const newFile: any = {
      name: name,
      user_id: user.id,
      bad_code_id: badCode?.id,
    };

    const retFile = await fetchCreateFile(newFile, client);

    addFile(retFile);
    setSelectedFile(retFile);
  };

  return (
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
  );
};
