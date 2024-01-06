import { useDetailCodeCommentListContext } from "@/src/contexts/CodeCommentListProvider"

export const useDeleteCodeDetailComment = () => {
    const { comments } = useDetailCodeCommentListContext();
}