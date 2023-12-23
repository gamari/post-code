"use client";

import { Comment } from "@/src/types";
import { ReactNode, createContext, useContext, useState } from "react";

interface ContextProps {
  comments: Comment[];
  setComments: React.Dispatch<React.SetStateAction<Comment[]>>;
}

interface ProviderProps {
  children: ReactNode;
  comments: Comment[];
}

export const CodeCommentListContext = createContext<ContextProps>({
  comments: [],
  setComments: () => {},
});

export const CodeCommentListProvider = ({
  children,
  comments: initComments,
}: ProviderProps) => {
  const [comments, setComments] = useState<Comment[]>(initComments || []);

  return (
    <CodeCommentListContext.Provider value={{ comments, setComments }}>
      {children}
    </CodeCommentListContext.Provider>
  );
};

export const useCodeCommentList = () => {
  return useContext(CodeCommentListContext);
};
