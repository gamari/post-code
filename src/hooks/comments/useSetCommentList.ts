import { useDetailCodeCommentList } from "@/src/contexts/CodeCommentListProvider"

export const useSetCommentList = () => {
    const { setComments } = useDetailCodeCommentList();

    return {
        setCommentList: setComments
    }
}