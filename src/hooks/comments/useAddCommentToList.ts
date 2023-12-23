import { Comment } from "@/src/types";

import { useSetCommentList } from "./useSetCommentList";

export const useAddCommentToList = () => {
    const { setCommentList } = useSetCommentList();

    const addCommentToList = (comment: Comment) => {
        setCommentList(prev => [...prev, comment]);
    }

    const addCommentListToList = (comments: Comment[]) => {
        setCommentList(prev => [...prev, ...comments]);
    }

    return {
        addCommentToList,
        addCommentListToList
    }
}