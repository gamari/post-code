import { useDetailCodeCommentListContext } from "@/src/contexts/CodeCommentListProvider";

export const useGetCommentList = () => {
    const { comments } = useDetailCodeCommentListContext();

    return {
        commentList: comments
    }
}