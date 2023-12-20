import { useState } from "react";

import { Code } from "@/src/types";

export const useBadCodeList = (initBadCodes: Code[]) => {
    const [codes, setCodes] = useState<Code[]>(initBadCodes);

    const removeBadCode = (id: number) => {
        setCodes(codes.filter((code) => code.id !== id));
    }

    return {
        codes,
        setCodes,
        removeBadCode
    }
}