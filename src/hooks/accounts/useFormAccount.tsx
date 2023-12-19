import { useSupabase } from "@/src/contexts/SupabaseProvider";
import { fetchUpdateUser } from "@/src/libs/externals/supabase/queries/users";
import { User } from "@/src/types";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const useFormAccount = (initUser: User) => {
  const { client } = useSupabase();
  const router = useRouter();

  const [user, setUser] = useState(initUser);

  const setUsername = (username: string) => {
    setUser({
      ...user,
      username,
    });
  };

  const setDescription = (description: string) => {
    setUser({
      ...user,
      description,
    });
  };

  const saveUser = async () => {
    if (!user.id) return;
    if (!client) return;

    if (!user.username) throw new Error("ユーザー名を入力してください");
    // if (!user.description) throw new Error("自己紹介を入力してください");

    await fetchUpdateUser(user, client);
    router.refresh();
  };

  return {
    user,
    setUsername,
    setDescription,
    saveUser,
  };
};
