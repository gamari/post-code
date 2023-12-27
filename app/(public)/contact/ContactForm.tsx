"use client";

import React from "react";

import { Heading } from "@/src/components/atoms/texts/heading";
import { useSupabase } from "@/src/contexts/SupabaseProvider";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/src/components/atoms/forms/textarea";
import { ErrorText } from "@/src/components/atoms/texts/error-text";
import { Input } from "@/src/components/atoms/forms/input";
import { Button } from "@/src/components/atoms/buttons/button";
import { fetchCreateContact } from "@/src/libs/externals/supabase/queries/contacts";
import { LinkText } from "@/src/components/molecules/displays/link-text";

const schema = z.object({
  content: z.string().min(1, "内容は必須です"),
  type: z.enum(["wants", "bugs", "other"]),
  email: z.string().email("有効なメールアドレスを入力してください"),
});

type ContactFormInputs = z.infer<typeof schema>;

export const ContactForm = () => {
  const { client } = useSupabase();
  const [isSuccess, setIsSuccess] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    if (!client) return;
    const newData = {
      content: data.content,
      type: data.type,
      email: data.email,
    } as any;
    await fetchCreateContact(newData, client);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="bg-white w-[500px] h-fit">
        <div className="p-6">
          <Heading>送信完了</Heading>
          <p className="my-2">お問い合わせありがとうございました。</p>

          <LinkText url="/" label="トップページに戻る" />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white w-[500px] h-fit">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-8 flex flex-col gap-6 rounded-md border-2 border-gray-300"
      >
        <Heading className="">お問い合わせ</Heading>

        <div className="flex flex-row items-center gap-4">
          <select {...register("type")} className="border p-1 w-[200px]">
            <option value="wants">要望</option>
            <option value="bugs">エラー</option>
            <option value="other">その他</option>
          </select>
          <p>{errors.type?.message}</p>
        </div>

        <div>
          <Heading type="h4">内容</Heading>
          <Textarea
            {...register("content")}
            placeholder="内容を入力..."
            rows={8}
          />
          <ErrorText text={errors.content?.message} />
        </div>

        <div>
          <Heading type="h4">返信先メールアドレス</Heading>
          <Input
            type="email"
            {...register("email")}
            className="w-full"
            placeholder="bad-codes@example.com"
          />
          <ErrorText text={errors.email?.message} />
        </div>
        <Button type="submit" className="mt-4">
          送信
        </Button>
      </form>
    </div>
  );
};
