import { User } from "@/libs/types";
import { SupabaseClient } from "@supabase/supabase-js";

export const fetchAuthUser = async (client: SupabaseClient) => {
    const { data: { user }, error } = await client.auth.getUser();

    if (error) throw new Error("認証中にエラーが発生しました。");

    return user;
}


export const fetchMyself = async (client: SupabaseClient) => {
    const { data: { user }, error } = await client.auth.getUser();

    if (error) throw new Error("認証中にエラーが発生しました。");

    console.log(user);

    return user;
};

export const fetchUserById = async (id: string, client: SupabaseClient) => {
    const { data: user, error } = await client
        .from("users")
        .select("*")
        .eq("id", id)
        .single();

    if (error) throw new Error("ユーザーの取得に失敗しました。");

    return user;
}

// create-update
export const fetchUpdateUser = async (newUser: User, client: SupabaseClient) => {
    const { data: user, error } = await client
        .from("users")
        .update(newUser)
        .eq("id", newUser.id)
        .single();

    if (error) throw new Error("ユーザーの更新に失敗しました。");

    return user;
}