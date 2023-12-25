"use client";

import { Comment, CommentDetail } from "@/src/types";
import { ReactNode, createContext, useContext, useState } from "react";

interface ContextProps {
  comments: CommentDetail[];
  setComments: React.Dispatch<React.SetStateAction<CommentDetail[]>>;
}

interface ProviderProps {
  children: ReactNode;
  comments: CommentDetail[];
}

export const CodeCommentListContext = createContext<ContextProps>({
  comments: [],
  setComments: () => {},
});

export const DetailCodeCommentListProvider = ({
  children,
  comments: initComments,
}: ProviderProps) => {
  const [comments, setComments] = useState<CommentDetail[]>(initComments || []);

  return (
    <CodeCommentListContext.Provider value={{ comments, setComments }}>
      {children}
    </CodeCommentListContext.Provider>
  );
};

export const useDetailCodeCommentList = () => {
  return useContext(CodeCommentListContext);
};
