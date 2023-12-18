"use client";

import React from "react";

import { Card, CardContent, CardHeader } from "@/src/components/ui/card";
import { useSupabase } from "@/src/components/providers/supabase-provider/SupabaseProvider";
import { Typo } from "@/src/components/base/typo";
import { Input } from "@/src/components/ui/input";
import { AuthUser, User } from "@/src/types";
import { Button } from "@/src/components/ui/button";
import { useToast } from "@/src/components/ui/use-toast";
import { Textarea } from "@/src/components/ui/textarea";
import { fetchUpdateUser } from "@/src/libs/externals/supabase/queries/users";
import { cn } from "@/src/libs/utils";

interface Props {
  user: User;
  className?: string;
}

export const AccountForm = ({ user, className = "" }: Props) => {
  const { client } = useSupabase();
  const { toast } = useToast();

  const [username, setUsername] = React.useState(user?.username || "");
  const [description, setDescription] = React.useState(user?.description || "");

  const handleUpdate = async () => {
    if (!client) return;

    if (!username) {
      toast({
        title: "ユーザー名を入力してください",
      });
      return;
    }

    const newUser = {
      ...user,
      username,
      description,
    };

    await fetchUpdateUser(newUser, client);

    toast({
      title: "更新しました",
    });
  };

  return (
    <Card className={cn("px-2 py-6", className)}>
      <CardHeader>
        <Typo text="アカウント情報" type="h3" />
      </CardHeader>

      <CardContent className="">
        <div className="flex flex-col gap-10">
          <div>
            <div>ユーザー名</div>
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <div>自己紹介</div>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={6}
            />
          </div>
        </div>

        <div className="mt-3">
          <Button onClick={handleUpdate}>更新する</Button>
        </div>
      </CardContent>
    </Card>
  );
};
