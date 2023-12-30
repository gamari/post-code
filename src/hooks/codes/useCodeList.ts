import { useState } from "react";

import { CodeDetail } from "@/src/types";

export const useCodeList = (initBadCodes: CodeDetail[]) => {
    const [codes, setCodes] = useState<CodeDetail[]>(initBadCodes);

    const removeBadCode = (id: number) => {
        setCodes(codes.filter((code) => code.id !== id));
    }

    return {
        codes,
        setCodes,
        removeBadCode
    }
}