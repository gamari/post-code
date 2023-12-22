import { useCodeEditor } from "@/src/contexts/CodeEditorProvider"
import { useSupabase } from "@/src/contexts/SupabaseProvider";
import { fetchUpdateCode } from "@/src/libs/externals/supabase/queries/codes";
import { fetchUpsertFiles } from "@/src/libs/externals/supabase/queries/files";
import { useRouter } from "next/navigation";
import { useLoading } from "../../useLoading";
import { useGetEditorCode } from "./useGetEditorCode";
import { useGetEditorSelectedFile } from "./useGetEditorSelectedFile";
import { useGetEditorFiles } from "./useGetEditorFiles";
import { useUpdateEditorFile } from "./useUpdateEditorFile";

export const useSaveCodeEditor = () => {
    const router = useRouter();
    const { loading, startLoading, stopLoading } = useLoading();
    const { client, getAuthUser } = useSupabase();

    const { code } = useGetEditorCode();
    const { selectedFile } = useGetEditorSelectedFile();
    const { files } = useGetEditorFiles();
    const { updateFile } = useUpdateEditorFile();


    async function saveEditor() {
        console.log("saveEditor");
        if (!client) throw new Error("通信に失敗しました。");

        const user = await getAuthUser();

        if (!user?.id) throw new Error("ユーザーが見つかりませんでした。");
        if (!client) throw new Error("通信に失敗しました。");
        if (!code?.id) throw new Error("対象のコードがありません。");

        console.log(selectedFile);
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
            router.refresh();
        } catch (e) {
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