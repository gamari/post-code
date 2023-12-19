import { useCodeEditor } from "@/src/contexts/CodeEditorProvider"
import { useSupabase } from "@/src/contexts/SupabaseProvider";
import { fetchUpdateBadCode } from "@/src/libs/externals/supabase/queries/bad-codes";
import { fetchUpsertFiles } from "@/src/libs/externals/supabase/queries/files";
import { useRouter } from "next/navigation";

export const useSaveCodeEditor = () => {
    const router = useRouter();
    const { client, getAuthUser } = useSupabase();

    const { badCode, selectedFile, updateFile, files } = useCodeEditor();

    async function saveEditor() {
        if (!client) throw new Error("通信に失敗しました。");

        const user = await getAuthUser();
        console.log(user);

        if (!user?.id) throw new Error("ユーザーが見つかりませんでした。");
        if (!client) throw new Error("通信に失敗しました。");
        if (!badCode?.id) throw new Error("対象のコードがありません。");

        if (selectedFile) {
            if (!selectedFile?.name) throw new Error("ファイル名がありません。");
            updateFile(selectedFile);
        }

        let newFiles = files;
        if (selectedFile) {
            newFiles = files.map((file) => {
                if (file.id === selectedFile.id) return selectedFile;
                return file;
            });
        }

        await fetchUpsertFiles(newFiles, client);
        await fetchUpdateBadCode(badCode, client);
        router.refresh();
    }

    return {
        saveEditor
    }
}