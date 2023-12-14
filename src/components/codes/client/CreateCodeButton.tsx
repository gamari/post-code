"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/src/components/ui/button";
import { fetchCreateBadCode } from "@/src/libs/externals/supabase/queries/bad-codes";
import { useSupabase } from "@/src/components/providers/supabase-provider/supabase-provider";
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
import { Input } from "@/src/components/ui/input";
import { useToast } from "@/src/components/ui/use-toast";

// TODO SSRで書く
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

    const retBadCode = await fetchCreateBadCode(newBadCode, client);

    router.refresh();

    if (retBadCode) {
      router.push(`/dashboard/codes/${retBadCode.id}/edit`);
    }
  };

  return (
    <>
      <Dialog>
        <DialogTrigger>
          <CiCirclePlus className="h-6 w-6 cursor-pointer hover:opacity-80" />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>タイトル</DialogTitle>
            <DialogDescription>
              <div>
                <Input
                  type="text"
                  placeholder="タイトルを入力してください"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
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
