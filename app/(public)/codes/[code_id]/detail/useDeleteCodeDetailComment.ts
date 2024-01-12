import { useCodeDetailCommentListContext } from "@/app/(public)/codes/[code_id]/detail/_contexts/CodeDetailCommentListProvider"

export const useDeleteCodeDetailComment = () => {
    const { comments } = useCodeDetailCommentListContext();
}