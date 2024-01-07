import { useDetailCodeCommentListContext } from "@/src/contexts/CodeCommentListProvider"
import { CommentDetail } from "@/src/types";

export const useCommentList = () => {
    const { comments, setComments } = useDetailCodeCommentListContext();

    const isEmpty = () => {
        return !comments?.length;
    }

    const isNotEmpty = () => {
        return !isEmpty();
    }

    const addComment = (comment: CommentDetail) => {
        setComments(prev => [...prev, comment]);
    }

    const addCommentList = (comments: CommentDetail[]) => {
        setComments(prev => [...prev, ...comments]);
    }

    const getLatestComment = () => {
        const latestComment = comments.sort((a, b) => {
            if (!a.created_at) return 1;
            if (!b.created_at) return -1;
            if (a.created_at < b.created_at) return 1;
            if (a.created_at > b.created_at) return -1;
            return 0;
        }
        )[0];
        return latestComment;
    }

    return {
        comments,
        addCommentList,
        addComment,
        getLatestComment,
        isEmpty,
        isNotEmpty
    }
}