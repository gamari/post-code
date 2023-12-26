import { Comment, CommentDetail } from "@/src/types";

import { useSetCommentList } from "./useSetCommentList";

export const useAddCommentToList = () => {
    const { setCommentList } = useSetCommentList();

    const addCommentToList = (comment: CommentDetail) => {
        setCommentList(prev => [...prev, comment]);
    }

    const addCommentListToList = (comments: CommentDetail[]) => {
        setCommentList(prev => [...prev, ...comments]);
    }

    return {
        addCommentToList,
        addCommentListToList
    }
}