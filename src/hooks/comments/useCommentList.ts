import { useState } from "react";

import { Comment } from "@/src/types/index";

export const useCommentList = (initComments: Comment[]) => {
    const [comments, setComments] = useState<Comment[]>(initComments || []);

    return {
        comments,
        setComments,
    }
}