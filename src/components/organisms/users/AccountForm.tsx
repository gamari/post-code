"use client";

import React from "react";

import { User } from "@/src/types";
import { Card, CardContent, CardHeader } from "@/src/components/molecules/displays/card";
import { Typo } from "@/src/components/atoms/texts/typo";
import { Button } from "@/src/components/atoms/buttons/button";
import { cn } from "@/src/libs/utils";
import { LabelInput } from "../../molecules/forms/label-input";
import { LabelTextarea } from "../../molecules/forms/label-textarea";
import { useFormAccount } from "@/src/hooks/accounts/useFormAccount";
import { useAlert } from "@/src/hooks/useAlert";
import { useRouter } from "next/navigation";

interface Props {
  user: User;
  className?: string;
}

export const AccountForm = ({ user: initUser, className = "" }: Props) => {
  const { infoAlert, errorAlert } = useAlert();
  const { user, setUsername, setDescription, saveUser } =
    useFormAccount(initUser);

  const handleUpdate = async () => {
    try {
      await saveUser();
      infoAlert("更新しました");
    } catch (e) {
      errorAlert("更新できませんでした", e);
    }
  };

  return (
    <Card className={cn("px-2 py-6", className)}>
      <CardHeader>
        <div className="flex flex-col gap-10 mb-6">
          <LabelInput
            label="ユーザー名"
            value={user?.username || ""}
            setValue={setUsername}
          />
          <LabelTextarea
            label="自己紹介"
            value={user?.description || ""}
            setValue={setDescription}
            rows={6}
          />
        </div>

        <Button onClick={handleUpdate} className="mt-3">
          更新する
        </Button>
      </CardHeader>
    </Card>
  );
};
