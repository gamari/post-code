import { actionLogin } from "@/src/actions/users";
import { Button } from "@/src/components/atoms/buttons/button";
import { LinkButton } from "@/src/components/molecules/buttons/link-button";
import { BackButton } from "@/src/components/molecules/back-button";
import Link from "next/link";
import React from "react";

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
        <label className="text-md" htmlFor="email">
          メールアドレス
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="email"
          placeholder="you@example.com"
          required
        />
        <label className="text-md" htmlFor="password">
          パスワード
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />

        <Button type="submit">ログイン</Button>
        <LinkButton url="/register" label="ユーザー登録" />
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
