import { useSupabase } from "@/src/contexts/SupabaseProvider";
import { fetchUpdateCode } from "@/src/libs/externals/supabase/queries/codes";
import { fetchUpsertFiles } from "@/src/libs/externals/supabase/queries/files";
import { useLoading } from "../../useLoading";
import { useCodeEditor } from "./useCodeEditor";
import { useCodeEditorSelectedFile } from "./useCodeEditorSelectedFile";
import { useCodeEditorFiles } from "./useCodeEditorFiles";

export const useSaveCodeEditor = () => {
    const { loading, startLoading, stopLoading } = useLoading();
    const { client, getAuthUser } = useSupabase();

    const { code } = useCodeEditor();
    const { selectedFile } = useCodeEditorSelectedFile();
    const { files, updateFile } = useCodeEditorFiles();

    async function saveEditor() {
        if (!client) throw new Error("通信に失敗しました。");

        const user = await getAuthUser();

        if (!code?.title) throw new Error("タイトルがありません。");
        if (!user?.id) throw new Error("ユーザーが見つかりませんでした。");
        if (!client) throw new Error("通信に失敗しました。");
        if (!code?.id) throw new Error("対象のコードがありません。");

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

        try {
            startLoading();
            await fetchUpsertFiles(newFiles, client);
            const retData = await fetchUpdateCode(code, client);
            return retData;
        } catch (e) {
            console.error(e);
            throw e;
        } finally {
            stopLoading();
        }
    }

    return {
        saveEditor,
        loading
    }
}