"use client";

import React from "react";

import { Card, CardContent, CardHeader } from "@/components/common/ui/card";
import { useSupabase } from "@/components/providers/supabase-provider/supabase-provider";
import { Typo } from "@/components/common/typo";
import { Input } from "@/components/common/ui/input";
import { AuthUser, User } from "@/libs/types";
import { Button } from "@/components/common/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/common/ui/textarea";
import { fetchUpdateUser } from "@/libs/externals/supabase/queries/users";

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
