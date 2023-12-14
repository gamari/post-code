import { BadCode } from "@/src/types";
import { useState } from "react";

export const useBadCodeList = (initBadCodes: BadCode[]) => {
    const [codes, setCodes] = useState<BadCode[]>(initBadCodes);

    const removeBadCode = (id: number) => {
        setCodes(codes.filter((code) => code.id !== id));
    }

    return {
        codes,
        setCodes,
        removeBadCode
    }
}