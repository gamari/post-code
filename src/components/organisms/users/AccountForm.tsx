"use client";

import React from "react";

import { User } from "@/src/types";
import { Card, CardHeader } from "@/src/components/molecules/displays/card";
import { Typo } from "@/src/components/atoms/texts/typo";
import { Button } from "@/src/components/atoms/buttons/button";
import { cn } from "@/src/libs/utils";
import {
  AccountFormValues,
  useFormAccount,
} from "@/src/hooks/accounts/useFormAccount";
import { useAlert } from "@/src/hooks/useAlert";
import { Heading } from "../../atoms/texts/heading";
import { Input } from "../../atoms/forms/input";
import { SubmitHandler } from "react-hook-form";
import { ErrorText } from "../../atoms/texts/error-text";
import { Textarea } from "../../atoms/forms/textarea";
import { Avatar } from "../../molecules/avatar";
import SelectAvatarList from "@/app/(private)/dashboard/(sidebar)/account/SelectAvatarList";

interface Props {
  user: User;
  className?: string;
}

// TODO fix types
export const AccountForm = ({ user: initUser, className = "" }: Props) => {
  const { infoAlert, errorAlert } = useAlert();
  const { register, handleSubmit, errors, saveUser, iconType, selectIcon } =
    useFormAccount(initUser);

  const handleUpdate: SubmitHandler<AccountFormValues> = async (data) => {
    try {
      await saveUser(data);
      infoAlert("更新しました");
    } catch (e) {
      errorAlert("更新できませんでした", e);
    }
  };

  return (
    <Card className={cn("px-2 py-6", className)}>
      <CardHeader>
        <form
          onSubmit={handleSubmit(handleUpdate)}
          className="flex flex-col gap-8 mb-6"
        >
          <div>
            <Heading type="h4">ユーザー名</Heading>
            <Input
              {...register("username")}
              placeholder="ユーザー名を入力"
              className="w-[180px]"
            />
            <ErrorText
              text={errors.username?.message}
              className="inline-block mt-2"
            />
          </div>
          <div>
            <Heading type="h4">自己紹介</Heading>
            <Textarea
              {...register("description")}
              rows={4}
              placeholder="自己紹介を入力"
            />
            <ErrorText text={errors?.description?.message} />
          </div>

          <div>
            <Heading type="h4">X(旧Twitter)</Heading>
            <div>
              <div className="flex flex-row items-center gap-2">
                <Typo className="text-gray-700" text="https://twitter.com/" />
                <Input {...register("x_url")} placeholder="xのIDを入力" />
              </div>
            </div>
            <ErrorText text={errors.x_url?.message} />
          </div>

          <div>
            <Heading type="h4">アイコン</Heading>

            <SelectAvatarList iconType={iconType} selectIcon={selectIcon} />
          </div>

          <Button type="submit" className="mt-3">
            更新する
          </Button>
        </form>
      </CardHeader>
    </Card>
  );
};
