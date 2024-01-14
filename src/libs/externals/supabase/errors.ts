import { PostgrestError } from "@supabase/supabase-js";

/** アプリケーションエラーに変換する。 */
export const convertPostgretErrorToAppErrorMessage = (error: PostgrestError, defaultMessage?: string) => {
    const { code } = error;
    console.log(error);
    console.log(code);

    if (code == "PGRST116") throw new Error("対象のデータがありませんでした。")

    throw new Error(defaultMessage || "DBエラーが発生しました。")
}

export const throwPostgresError = (error: PostgrestError, defaultMessage?: string) => {
    throw new Error(convertPostgretErrorToAppErrorMessage(error, defaultMessage));
}