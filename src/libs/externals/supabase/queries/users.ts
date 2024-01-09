import { PUBLIC_USER_TABLE } from "@/src/libs/constants/tables";
import { User } from "@/src/types";
import { SupabaseClient } from "@supabase/supabase-js";

export const fetchUserByUsername = async (username: string, client: SupabaseClient) => {
    const { data: user, error } = await client
        .from(PUBLIC_USER_TABLE)
        .select("*")
        .eq("username", username)
        .maybeSingle();

    if (error) throw new Error("ユーザーの取得に失敗しました。");

    return user;
}

export const fetchUserByEmail = async (email: string, client: SupabaseClient) => {
    const { data: user, error } = await client
        .from(PUBLIC_USER_TABLE)
        .select("*")
        .eq("email", email)
        .maybeSingle();


    if (error) {
        console.error(error);
        throw new Error("ユーザーの取得に失敗しました。");
    }

    return user;
}

export const fetchAuthUser = async (client: SupabaseClient) => {
    const { data: { user }, error } = await client.auth.getUser();

    if (error) return null;

    return user;
}


export const fetchUserById = async (id: string, client: SupabaseClient) => {
    const { data: user, error } = await client
        .from(PUBLIC_USER_TABLE)
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

