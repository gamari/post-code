import { BadCode } from "@/libs/types";
import { useState } from "react";

export const useBadCodeForm = (initCode?: BadCode) => {
    const [id, setId] = useState<number | undefined>(initCode?.id);
    const [title, setTitle] = useState<string>(initCode?.title || "");
    const [description, setDescription] = useState<string>(initCode?.description || "");

    return {
        id,
        title,
        description,
        setId,
        setTitle,
        setDescription,
    };
}