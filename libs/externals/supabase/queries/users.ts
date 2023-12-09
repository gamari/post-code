import { SupabaseClient } from "@supabase/supabase-js";


export const fetchMyself = async (client: SupabaseClient) => {
    const { data: { user }, error } = await client.auth.getUser();

    if (error) throw new Error("認証中にエラーが発生しました。");

    console.log(user);

    return user;
};
