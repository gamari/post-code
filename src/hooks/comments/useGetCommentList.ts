import { useCodeDetailCommentListContext } from "@/app/(public)/codes/[code_id]/detail/_contexts/CodeDetailCommentListProvider";

export const useGetCommentList = () => {
    const { comments } = useCodeDetailCommentListContext();

    return {
        commentList: comments
    }
}