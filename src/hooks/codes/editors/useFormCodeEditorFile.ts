import { useSupabase } from "@/src/contexts/SupabaseProvider";
import { fetchCreateFile } from "@/src/libs/externals/supabase/queries/files";
import { useState } from "react";

export const useFormCodeFile = () => {
    const { client, authUser } = useSupabase();

    const [name, setName] = useState("");

    const saveFile = async (codeId?: number) => {
        if (!client) throw new Error("接続に失敗しました。");
        if (!name) throw new Error("ファイル名を入力してください");
        if (!authUser?.id) throw new Error("ログインしてください。");
        if (!codeId) throw new Error("コードが選択されていません。");

        const newFile: any = {
            name: name,
            user_id: authUser.id,
            code_id: codeId,
        };

        const retFile = await fetchCreateFile(newFile, client);
        return retFile;
    }

    return {
        name,
        setName,
        saveFile
    }
}