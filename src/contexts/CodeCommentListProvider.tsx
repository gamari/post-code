"use client";

import { Comment } from "@/src/types";
import { ReactNode, createContext, useContext, useState } from "react";

interface ContextProps {
  comments: Comment[];
  addComments: (newComments: Comment[]) => void;
  setComments: React.Dispatch<React.SetStateAction<Comment[]>>;
}

interface ProviderProps {
  children: ReactNode;
  comments: Comment[];
}

export const CodeCommentListContext = createContext<ContextProps>({
  comments: [],
  addComments: () => {},
  setComments: () => {},
});

export const CodeCommentListProvider = ({
  children,
  comments: initComments,
}: ProviderProps) => {
  const [comments, setComments] = useState<Comment[]>(initComments || []);

  // TODO 廃止
  function addComments(newComments: Comment[]) {
    setComments([...comments, ...newComments]);
  }

  return (
    <CodeCommentListContext.Provider
      value={{ comments, addComments, setComments }}
    >
      {children}
    </CodeCommentListContext.Provider>
  );
};

export const useCodeCommentList = () => {
  return useContext(CodeCommentListContext);
};
