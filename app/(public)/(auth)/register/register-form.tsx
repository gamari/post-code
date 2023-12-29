"use client";

import React from "react";

import { actionSignUp } from "@/src/actions/users";
import { Button } from "@/src/components/atoms/buttons/button";
import { BackButton } from "@/src/components/molecules/buttons/back-button";
import { LinkButton } from "@/src/components/molecules/buttons/link-button";
import { LabelInput } from "@/src/components/molecules/forms/LabelInput";
import { RegisterFormErrorMessage } from "./register-form-error-message";
import { Heading } from "@/src/components/atoms/texts/heading";
import { GoogleSignupButton } from "../GoogleSignupButton";
import { Flex } from "@/src/components/atoms/containers/Flex";

interface Props {
  errorStatus?: string;
}

// TODO 作成中を判定できるようにしたい
export const RegisterForm = ({ errorStatus }: Props) => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap={12}
      className="relative w-full h-full"
    >
      <BackButton url="/" className="absolute left-8 top-8 " label="ホームへ" />

      <form
        className="max-w-md bg-white border px-8 py-12 rounded-md flex flex-col items-center w-full justify-center gap-2 text-foreground"
        action={actionSignUp}
      >
        <Heading>ユーザー登録画面</Heading>
        <LabelInput
          type="email"
          name="email"
          label="メールアドレス"
          placeholder="taro@example.com"
        />
        <LabelInput
          type="text"
          name="username"
          label="ユーザー名"
          placeholder="yamada"
        />
        <LabelInput
          type="password"
          name="password"
          label="パスワード"
          placeholder="pasword"
        />

        <Button type="submit" className="mt-3 w-full">
          ユーザー登録
        </Button>
        <LinkButton url="/login" label="ログイン画面へ" />

        {errorStatus && <RegisterFormErrorMessage status={errorStatus} />}

        <div className="w-full mt-3 pt-2">
          <Heading type="h4">ソーシャルログイン</Heading>
          <GoogleSignupButton />
        </div>
      </form>
    </Flex>
  );
};
