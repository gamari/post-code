import { useCodeCommentList } from "@/src/contexts/CodeCommentListProvider";

export const useGetCommentList = () => {
    const { comments } = useCodeCommentList();

    return {
        commentList: comments
    }
}