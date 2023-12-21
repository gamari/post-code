"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/src/components/atoms/buttons/button";
import { fetchCreateCode } from "@/src/libs/externals/supabase/queries/codes";
import { useSupabase } from "@/src/contexts/SupabaseProvider";
import { CiCirclePlus } from "react-icons/ci";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog";
import { Input } from "@/src/components/atoms/forms/input";
import { useToast } from "@/src/components/ui/use-toast";
import { CreateButton } from "@/src/components/molecules/buttons/create-button";

// TODO SSRで書く
// TODO CreateModalにする
export const CreateCodeButton = () => {
  const router = useRouter();
  const { client } = useSupabase();
  const { toast } = useToast();

  const [name, setName] = useState("");

  const handleCreateCode = async (e: any) => {
    if (!client) throw new Error("接続できません。");

    if (!name) {
      toast({
        title: "タイトルを入力してください",
      });
      return;
    }

    // TODO fix type
    const newBadCode: any = {
      title: name,
    };

    const retBadCode = await fetchCreateCode(newBadCode, client);

    router.refresh();

    if (retBadCode) {
      router.push(`/dashboard/codes/${retBadCode.id}/edit`);
    }
  };

  return (
    <>
      <Dialog>
        <DialogTrigger>
          <CreateButton label="新規作成" />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>タイトル</DialogTitle>
            <DialogDescription>
              <Input
                type="text"
                placeholder="タイトルを入力してください"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <DialogClose asChild>
              <Button onClick={handleCreateCode}>作成</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button variant="outline">閉じる</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
