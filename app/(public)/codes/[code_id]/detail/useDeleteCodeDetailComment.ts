import { useDetailCodeCommentList } from "@/src/contexts/CodeCommentListProvider"

export const useDeleteCodeDetailComment = () => {
    const { comments } = useDetailCodeCommentList();
}