import { useDetailCodeCommentListContext } from "@/src/contexts/CodeCommentListProvider"

export const useSetCommentList = () => {
    const { setComments } = useDetailCodeCommentListContext();

    return {
        setCommentList: setComments
    }
}