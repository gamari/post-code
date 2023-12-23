import { useCodeCommentList } from "@/src/contexts/CodeCommentListProvider"

export const useSetCommentList = () => {
    const { setComments } = useCodeCommentList();

    return {
        setCommentList: setComments
    }
}