"use client";

import React from "react";

import { User } from "@/src/types";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/src/components/molecules/displays/card";
import { Typo } from "@/src/components/atoms/texts/typo";
import { Button } from "@/src/components/atoms/buttons/button";
import { cn } from "@/src/libs/utils";
import { LabelInput } from "../../molecules/forms/LabelInput";
import { LabelTextarea } from "../../molecules/forms/LabelTextarea";
import { useFormAccount } from "@/src/hooks/accounts/useFormAccount";
import { useAlert } from "@/src/hooks/useAlert";
import { useRouter } from "next/navigation";
import { Heading } from "../../atoms/texts/heading";
import { Input } from "../../atoms/forms/input";

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

          <div>
            <Heading type="h4">SNS</Heading>
            <div>
              <Typo className="text-gray-700 border p-1" text="X(旧Twitter)" />
              <div className="flex flex-row items-center gap-2">
                <Typo className="text-gray-700" text="https://twitter.com/" />
                <Input
                  value={"gamari"}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <Button onClick={handleUpdate} className="mt-3">
          更新する
        </Button>
      </CardHeader>
    </Card>
  );
};
