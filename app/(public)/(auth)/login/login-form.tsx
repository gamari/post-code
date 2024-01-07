"use client";

import React, { useState } from "react";

import { actionLogin } from "@/src/actions/users";
import { Button } from "@/src/components/atoms/buttons/button";
import { LinkButton } from "@/src/components/molecules/buttons/link-button";
import { BackButton } from "@/src/components/molecules/buttons/back-button";
import { LabelInput } from "@/src/components/molecules/forms/LabelInput";
import { LoginFormErrorMessage } from "./login-form-error-message";
import { Heading } from "@/src/components/atoms/texts/heading";
import { GoogleLoginButton } from "../GoogleLoginButton";
import { Flex } from "@/src/components/atoms/containers/Flex";
import { Center } from "@/src/components/atoms/containers/Center";
import { useLoading } from "@/src/hooks/useLoading";

interface Props {
  errorStatus: string;
}

export const LoginForm = ({ errorStatus }: Props) => {
  const { loading, startLoading, stopLoading } = useLoading();

  return (
    <div className="relative flex flex-col w-full h-full justify-center items-center gap-4">
      <BackButton url="/" className="absolute left-8 top-8 " label="ホームへ" />

      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        gap={8}
        className="max-w-md bg-white border px-10 py-12 rounded-md w-full  text-foreground"
      >
        <form
          className="w-full"
          action={actionLogin}
          onSubmit={() => {
            startLoading();
            setTimeout(() => {
              stopLoading();
            }, 2000);
          }}
        >
          <Center>
            <Heading>ログイン画面</Heading>
          </Center>

          <Flex direction="column" className="mt-4" gap={8}>
            <LabelInput
              type="email"
              id="email"
              name="email"
              label="メールアドレス"
              placeholder="taro@example.com"
              autocomplete="email"
            />
            <LabelInput
              type="password"
              id="password"
              name="password"
              label="パスワード"
              placeholder="pasword"
              autocomplete="password"
            />
          </Flex>

          <Flex direction="column" gap={12} className="mt-3">
            <Button type="submit" className="w-full mt-4" disabled={loading}>
              ログイン
            </Button>
            <LinkButton
              url="/register"
              label="ユーザー登録画面へ"
              className="w-full"
            />
            <LoginFormErrorMessage status={errorStatus} />
          </Flex>
        </form>
        <div className="w-full mt-3 pt-2">
          <Heading type="h4">ソーシャルログイン</Heading>
          <GoogleLoginButton />
        </div>
      </Flex>
    </div>
  );
};
