import { actionLogin } from "@/src/actions/users";
import { Button } from "@/src/components/atoms/buttons/button";
import { LinkButton } from "@/src/components/molecules/buttons/link-button";
import { BackButton } from "@/src/components/molecules/back-button";

import React from "react";
import { LabelInput } from "@/src/components/molecules/forms/LabelInput";

interface Props {
  message: string;
}

export const LoginForm = ({ message }: Props) => {
  return (
    <div className="relative flex flex-col w-full h-full justify-center items-center">
      <BackButton url="/" className="absolute left-8 top-8 " label="ホームへ" />

      <form
        className="max-w-md border px-8 py-12 rounded-md flex flex-col w-full justify-center gap-2 text-foreground"
        action={actionLogin}
      >
        <LabelInput
          id="email"
          name="email"
          label="メールアドレス"
          placeholder="taro@example.com"
        />
        <LabelInput
          id="password"
          name="password"
          label="パスワード"
          placeholder="pasword"
        />

        <Button type="submit">ログイン</Button>
        <LinkButton url="/register" label="ユーザー登録へ" />
        {/* <Button formAction={actionSignUp} variant="outline">
          ユーザー登録
        </Button> */}

        {message && (
          <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
            {message}
          </p>
        )}
      </form>
    </div>
  );
};
