import React from "react";

import { actionLogin } from "@/src/actions/users";
import { Button } from "@/src/components/atoms/buttons/button";
import { LinkButton } from "@/src/components/molecules/buttons/link-button";
import { BackButton } from "@/src/components/molecules/buttons/back-button";
import { LabelInput } from "@/src/components/molecules/forms/LabelInput";
import { LoginFormErrorMessage } from "./login-form-error-message";
import { Heading } from "@/src/components/atoms/texts/heading";
import { GoogleLoginButton } from "../GoogleLoginButton";
import { GoogleButton } from "@/src/components/molecules/buttons/google-button";

interface Props {
  errorStatus: string;
}

export const LoginForm = ({ errorStatus }: Props) => {
  return (
    <div className="relative flex flex-col w-full h-full justify-center items-center gap-3">
      <BackButton url="/" className="absolute left-8 top-8 " label="ホームへ" />


      <form
        className="max-w-md bg-white border px-8 py-12 rounded-md flex flex-col items-center w-full justify-center gap-2 text-foreground"
        action={actionLogin}
      >
        <Heading>ログイン画面</Heading>
        <LabelInput
          type="email"
          id="email"
          name="email"
          label="メールアドレス"
          placeholder="taro@example.com"
        />
        <LabelInput
          type="password"
          id="password"
          name="password"
          label="パスワード"
          placeholder="pasword"
        />

        <Button type="submit">ログイン</Button>
        <LinkButton url="/register" label="ユーザー登録画面へ" />
        <LoginFormErrorMessage status={errorStatus} />

        <div className="border-t w-full mt-3 pt-2">
          <GoogleLoginButton />
        </div>
      </form>

    </div>
  );
};
