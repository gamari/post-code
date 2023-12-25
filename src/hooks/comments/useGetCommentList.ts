import { useDetailCodeCommentList } from "@/src/contexts/CodeCommentListProvider";

export const useGetCommentList = () => {
    const { comments } = useDetailCodeCommentList();

    return {
        commentList: comments
    }
}