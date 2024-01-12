import { v4 as uuidv4 } from 'uuid';
import { useSupabase } from "../contexts/SupabaseProvider"
import { fetchAuthUser } from "../libs/externals/supabase/queries/users";
import { useLoading } from './useLoading';

export const useUploadImage = () => {
    const { loading, startLoading, stopLoading } = useLoading(false);
    const { client } = useSupabase();

    const uploadImage = async (file: File) => {
        if (!client) return;
        const authUser = await fetchAuthUser(client);
        const userId = authUser?.id;
        const randomId = uuidv4();
        const fileName = `${userId}/${randomId}-${file?.name}`;
        const { error } = await client.storage.from("images").upload(fileName, file);

        if (error) throw error;

        const { data: {
            publicUrl
        } } = client.storage
            .from('images')
            .getPublicUrl(fileName);
        return publicUrl
    }

    return {
        uploadImage,
        loading,
        startLoading,
        stopLoading,
    }
}