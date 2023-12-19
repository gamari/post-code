import { useSupabase } from "@/src/contexts/SupabaseProvider";
import { fetchCreateFile } from "@/src/libs/externals/supabase/queries/files";
import { useState } from "react";

export const useFormCodeFile = () => {
    const { client } = useSupabase();

    const [name, setName] = useState("");

    const saveFile = async (codeId: number, userId: string) => {
        if (!client) throw new Error("接続に失敗しました。");

        const newFile: any = {
            name: name,
            user_id: userId,
            bad_code_id: codeId,
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