"use client";

import { CommentDetail } from "@/src/types";
import { ReactNode, createContext, useContext, useState } from "react";

interface ContextProps {
  comments: CommentDetail[];
  setComments: React.Dispatch<React.SetStateAction<CommentDetail[]>>;
}

interface ProviderProps {
  children: ReactNode;
  comments: CommentDetail[];
}

export const CodeDetailCommentListContext = createContext<ContextProps>({
  comments: [],
  setComments: () => {},
});

export const CodeDetailCommentListProvider = ({
  children,
  comments: initComments,
}: ProviderProps) => {
  const [comments, setComments] = useState<CommentDetail[]>(initComments || []);

  return (
    <CodeDetailCommentListContext.Provider value={{ comments, setComments }}>
      {children}
    </CodeDetailCommentListContext.Provider>
  );
};

export const useCodeDetailCommentListContext = () => {
  return useContext(CodeDetailCommentListContext);
};
