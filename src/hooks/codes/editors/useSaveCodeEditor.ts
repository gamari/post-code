import { useSupabase } from "@/src/contexts/SupabaseProvider";
import { fetchUpdateCode } from "@/src/libs/externals/supabase/queries/codes";
import { fetchUpsertFiles } from "@/src/libs/externals/supabase/queries/files";
import { useLoading } from "../../useLoading";
import { useCodeEditor } from "./useCodeEditor";
import { useCodeEditorSelectedFile } from "./useCodeEditorSelectedFile";
import { useCodeEditorFiles } from "./useCodeEditorFiles";
import { fetchAttachTagToCode, fetchRemoveTagFromCode, fetchTagListOfCode } from "@/src/libs/externals/supabase/queries/tags";
import { useRouter } from "next/navigation";

export const useSaveCodeEditor = () => {
    const router = useRouter();
    const { loading, startLoading, stopLoading } = useLoading();
    const { client, getAuthUser } = useSupabase();

    const { code } = useCodeEditor();
    const { selectedFile } = useCodeEditorSelectedFile();
    const { files, updateFile } = useCodeEditorFiles();

    // TODO getCodeByIdでカラム増やすと、影響でるの直す必要がある
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

            // TODO 別のHookに管理させたい
            // タグの更新
            const existingTags = await fetchTagListOfCode(code.id, client);
            const newTags = code?.tags?.filter((tag) => {
                return !existingTags.find((existingTag) => existingTag.name === tag.name);
            }) || [];
            const removeTags = existingTags.filter((existingTag) => {
                return !code?.tags?.find((tag) => tag.name === existingTag.name);
            }) || [];

            for (const tag of newTags) {
                await fetchAttachTagToCode(code.id, tag.id, client);
            }

            for (const tag of removeTags) {
                await fetchRemoveTagFromCode(code.id, tag.id, client);
            }

            await fetchUpsertFiles(newFiles, client);
            const retData = await fetchUpdateCode(code, client);

            router.refresh();
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