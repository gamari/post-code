"use client";

import React from "react";
import Image from "next/image";

import { User } from "@/src/types";
import { Card, CardHeader } from "@/src/components/molecules/displays/card";
import { Typo } from "@/src/components/atoms/texts/typo";
import { Button } from "@/src/components/atoms/forms/button";
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
import SelectAvatarList from "@/app/(private)/dashboard/(sidebar)/account/SelectAvatarList";
import { Flex } from "../../atoms/containers/Flex";
import { CloseIcon } from "../../atoms/icons/close-icon";
import { Description } from "../../atoms/texts/description";
import { useAi } from "@/src/hooks/ai/useAi";

interface Props {
  user: User;
  className?: string;
}

// TODO fix types
export const AccountForm = ({ user: initUser, className = "" }: Props) => {
  const { saveAiKey, aiKey, setAiKey } = useAi();
  const { infoAlert, errorAlert } = useAlert();
  const {
    register,
    handleSubmit,
    errors,
    saveUser,
    iconType,
    selectIcon,
    avatarIcon,
    setAvatarIcon,
    removeAvatarUrl,
  } = useFormAccount(initUser);

  const handleUpdate: SubmitHandler<AccountFormValues> = async (data) => {
    try {
      await saveUser(data);
      saveAiKey(aiKey);
      infoAlert("更新しました");
    } catch (e) {
      errorAlert("更新できませんでした", e);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    setAvatarIcon(file);
  };

  const handleFileRemove = () => {
    setAvatarIcon(null);
  };

  const handleRemoveAvatarIcon = () => {
    removeAvatarUrl();
  };

  return (
    <Card className={cn("px-2 py-6", className)}>
      <CardHeader>
        <form
          onSubmit={handleSubmit(handleUpdate)}
          className="flex flex-col gap-8 mb-6"
        >
          <div>
            <Heading type="h4" className="mb-2">
              ユーザー名
            </Heading>
            <Input
              {...register("username")}
              placeholder="ユーザー名(...20)"
              className="w-[180px]"
              maxLength={20}
            />
            <ErrorText
              text={errors.username?.message}
              className="inline-block mt-2"
            />
          </div>
          <div>
            <Heading type="h4" className="mb-2">
              自己紹介
            </Heading>
            <Textarea
              {...register("description")}
              rows={4}
              placeholder="自己紹介(...200)"
              maxLength={200}
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

            <div className="mt-2">
              {initUser?.avatar_url ? (
                <Flex gap={8} direction="row" alignItems="center">
                  <Image
                    src={initUser?.avatar_url}
                    width={40}
                    height={40}
                    alt="avatar"
                  />
                  <CloseIcon
                    onClick={handleRemoveAvatarIcon}
                    className="cursor-pointer"
                  />
                </Flex>
              ) : (
                <>
                  {" "}
                  {avatarIcon ? (
                    <Flex gap={8} direction="row" alignItems="center">
                      <Image
                        src={URL.createObjectURL(avatarIcon)}
                        width={40}
                        height={40}
                        alt="avatar"
                      />
                      <CloseIcon
                        onClick={handleFileRemove}
                        className="cursor-pointer"
                      />
                    </Flex>
                  ) : (
                    <div>
                      <SelectAvatarList
                        iconType={iconType}
                        selectIcon={selectIcon}
                      />

                      <input
                        type="file"
                        onChange={handleFileChange}
                        className="mt-2"
                      />
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

          <div>
            <Heading type="h4">OpenAIキー</Heading>
            <Description className="my-2">
              キーを入力するとAI機能が利用できるようになります。
            </Description>

            <Input
              value={aiKey}
              onChange={(e) => setAiKey(e.target.value)}
              placeholder="OpenAIキー..."
            />
          </div>

          <Button type="submit" className="mt-3">
            更新する
          </Button>
        </form>
      </CardHeader>
    </Card>
  );
};
