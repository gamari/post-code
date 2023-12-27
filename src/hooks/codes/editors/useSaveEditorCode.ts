import { useCodeEditor } from "@/src/contexts/CodeEditorProvider"
import { useSupabase } from "@/src/contexts/SupabaseProvider";
import { fetchUpdateCode } from "@/src/libs/externals/supabase/queries/codes";
import { fetchUpsertFiles } from "@/src/libs/externals/supabase/queries/files";
import { redirect, useRouter } from "next/navigation";
import { useLoading } from "../../useLoading";
import { useGetEditorCode } from "./getter/useGetEditorCode";
import { useGetEditorSelectedFile } from "./getter/useGetEditorSelectedFile";
import { useGetEditorFiles } from "./getter/useGetEditorFiles";
import { useUpdateEditorFile } from "./useUpdateEditorFile";

export const useSaveEditorCode = () => {
    const router = useRouter();
    const { loading, startLoading, stopLoading } = useLoading();
    const { client, getAuthUser } = useSupabase();

    const { code } = useGetEditorCode();
    const { selectedFile } = useGetEditorSelectedFile();
    const { files } = useGetEditorFiles();
    const { updateFile } = useUpdateEditorFile();


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
            await fetchUpdateCode(code, client);
            
            router.refresh()
            router.push(`/codes/${code.id}/detail`);
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