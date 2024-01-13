import { PostgrestError } from "@supabase/supabase-js";

/** アプリケーションエラーに変換する。 */
export const convertPostgretErrorToAppErrorMessage = (error: PostgrestError, defaultMessage?: string) => {
    const { code } = error;
    console.log(error);
    console.log(code);

    throw new Error(defaultMessage || "DBエラーが発生しました。")
}