import { useSupabase } from "@/src/contexts/SupabaseProvider";
import { fetchCreateCode } from "@/src/libs/externals/supabase/queries/codes";
import { Code, CodeFormType } from "@/src/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { useLoading } from "../useLoading";


const codeSchema = z.object({
    title: z.string().min(1, "タイトルは入力して下しさい。").max(60, "タイトルは60文字以内にしてください。"),
});

export const useFormCode = () => {
    const { loading, startLoading, stopLoading } = useLoading();
    const { client } = useSupabase();
    const router = useRouter();

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<CodeFormType>({
        resolver: zodResolver(codeSchema),
    });

    const onSubmit: SubmitHandler<CodeFormType> = async (data) => {
        // TODO loading 処理を追加する
        if (!client) throw new Error("接続に失敗しました。");
        const newBadCode: CodeFormType = {
            title: data.title,
        };

        try {
            startLoading();
            const retBadCode = await fetchCreateCode(newBadCode, client);
    
            if (retBadCode) {
                await router.refresh();
                router.push(`/dashboard/codes/${retBadCode.id}/edit`);
            }
        } catch (e) {
            console.error(e);
        } finally {
            stopLoading();
        }
    };

    return {
        register,
        handleSubmit: handleSubmit(onSubmit),
        setValue,
        errors,
        onSubmit,
        loading
    }
}