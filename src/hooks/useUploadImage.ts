import { useSupabase } from "../contexts/SupabaseProvider"
import { useLoading } from './useLoading';

export const useUploadImage = () => {
    const { loading, startLoading, stopLoading } = useLoading(false);
    const { client } = useSupabase();

    const uploadImage = async (file: File) => {
        if (!client) return;
        var data = new FormData()
        data.append('file', file)
        const res = await fetch("/api/image", {
            method: "POST",
            body: data,
        });
        if (!res.ok) {
            const json = await res.json();
            const { message } = json;

            if (message) {
                throw new Error(message);
            }

            throw new Error("画像アップロードに失敗しました。");
        }

        const json = await res.json();
        const { url } = json;
        return url
    }

    const validateImage = (file: File) => {
        if (file.size > 1024 * 1024 * 2) {
            throw new Error("画像サイズは2MB以下にしてください。");
        }
    }

    return {
        uploadImage,
        validateImage,
        loading,
        startLoading,
        stopLoading,
    }
}