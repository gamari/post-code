import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { useSupabase } from "@/src/contexts/SupabaseProvider";
import { fetchUpdateUser } from "@/src/libs/externals/supabase/queries/users";
import { User } from "@/src/types";

const userSchema = z.object({
  id: z.string().optional(),
  username: z.string().min(1, "ユーザー名を入力してください"),
  description: z.string().optional(),
  x_url: z.string().optional(),
});

export interface AccountFormValues {
  id?: string;
  username: string;
  description?: string;
  x_url?: string;
}

export const useFormAccount = (initUser: User) => {
  const { client } = useSupabase();
  const router = useRouter();
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
        setValue(
          key as keyof AccountFormValues,
          initUser[key as keyof User] || ""
        );
      }
    }
  }, [initUser, setValue]);

  const saveUser: SubmitHandler<AccountFormValues> = async (data) => {
    if (!client) return;

    await fetchUpdateUser(data as User, client);
    router.refresh();
  };

  return {
    register,
    handleSubmit,
    errors,
    saveUser,
  };
};
