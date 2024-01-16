import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { useSupabase } from "@/src/contexts/SupabaseProvider";
import {
  fetchUpdateUser,
  fetchUserByUsername,
} from "@/src/libs/externals/supabase/queries/users";
import { User } from "@/src/types";
import { useUploadImage } from "../useUploadImage";

const userSchema = z.object({
  id: z.string().optional(),
  username: z
    .string()
    .min(1, "ユーザー名を入力してください")
    .max(16, "16文字以内で入力してください"),
  description: z.string().max(160, "160文字以内で入力してください").optional(),
  x_url: z.string().max(60, "長すぎます").optional(),
});

export interface AccountFormValues {
  id?: string;
  username: string;
  description?: string;
  x_url?: string;
  avatar_url?: string | null;
}

export const useFormAccount = (initUser: User) => {
  const router = useRouter();
  const { client } = useSupabase();
  const { uploadImage } = useUploadImage();

  const [iconType, setIconType] = useState<string | null>(
    initUser?.icon_type || null
  );
  const [avatarIcon, setAvatarIcon] = useState<File | null>();

  const selectIcon = (type: string | null) => {
    setIconType(type);
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<AccountFormValues>({
    resolver: zodResolver(userSchema),
    defaultValues: initUser as AccountFormValues,
  });

  useEffect(() => {
    for (const key in initUser) {
      if (key in initUser) {
        const value = initUser[key as keyof User];
        if (typeof value === "boolean") {
          setValue(key as keyof AccountFormValues, value ? "true" : "false");
        } else {
          setValue(key as keyof AccountFormValues, value || "");
        }
      }
    }
  }, [initUser, setValue]);

  const saveUser: SubmitHandler<AccountFormValues> = async (data) => {
    if (!client) return;

    const user = await fetchUserByUsername(data.username, client);

    if (user && user.id !== data.id) {
      throw new Error("既に存在するユーザー名です");
    }

    let url: string | undefined;
    if (avatarIcon) {
      url = await uploadImage(avatarIcon);
    }

    const updatedData = {
      ...data,
      icon_type: iconType,
      avatar_url: url,
    } as any;

    await fetchUpdateUser(updatedData, client);
    router.refresh();
  };

  const removeAvatarUrl = async () => {
    if (!client) return;

    const updatedData = {
      ...initUser,
      avatar_url: null,
    } as any;

    await fetchUpdateUser(updatedData, client);
    setValue("avatar_url", null);
    router.refresh();
  }

  return {
    register,
    handleSubmit,
    errors,
    saveUser,
    iconType,
    selectIcon,
    avatarIcon,
    setAvatarIcon,
    removeAvatarUrl
  };
};
