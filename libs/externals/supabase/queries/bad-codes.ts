import { BadCode } from "@/libs/types";
import { SupabaseClient } from "@supabase/supabase-js";

export const fetchUpdateBadCode = async (newBadCodes: BadCode, client: SupabaseClient) => {
    const { error } = await client
        .from("bad_codes")
        .update(newBadCodes)
        .eq("id", newBadCodes.id);

    if (error) throw new Error("BadCodeの更新中にエラーが発生しました。");

    return;
}