import { useCodeEditor } from "@/src/contexts/CodeEditorProvider"
import { useSupabase } from "@/src/contexts/SupabaseProvider";
import { fetchUpdateBadCode } from "@/src/libs/externals/supabase/queries/bad-codes";
import { useRouter } from "next/navigation";

export const useSaveCodeEditor = () => {
    const router = useRouter();
    const { client } = useSupabase();

    const { badCode } = useCodeEditor();

    async function saveEditor() {
        if (!client) throw new Error("通信に失敗しました。");
        if (!badCode?.id) throw new Error("対象のコードがありません。");

        console.log(badCode);
        await fetchUpdateBadCode(badCode, client);
        router.refresh();
    }

    return {
        saveEditor
    }
}