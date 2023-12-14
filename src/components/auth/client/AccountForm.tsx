"use client";

import React from "react";

import { Card, CardContent, CardHeader } from "@/src/components/ui/card";
import { useSupabase } from "@/src/components/providers/supabase-provider/supabase-provider";
import { Typo } from "@/src/components/base/typo";
import { Input } from "@/src/components/ui/input";
import { AuthUser, User } from "@/src/types";
import { Button } from "@/src/components/ui/button";
import { useToast } from "@/src/components/ui/use-toast";
import { Textarea } from "@/src/components/ui/textarea";
import { fetchUpdateUser } from "@/src/libs/externals/supabase/queries/users";

interface Props {
  user: User;
}

export const AccountForm = ({ user }: Props) => {
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
    <Card>
      <CardHeader>
        <Typo text="アカウント情報" type="h3" />
      </CardHeader>

      <CardContent>
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
          />
        </div>

        <div>
          <Button onClick={handleUpdate}>更新する</Button>
        </div>
      </CardContent>
    </Card>
  );
};
