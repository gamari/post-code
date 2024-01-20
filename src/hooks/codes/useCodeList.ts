import { useState } from "react";

import { CodeDetail } from "@/src/types";
import { useRouter } from "next/navigation";

// TODO 消したい
export const useCodeList = (initBadCodes: CodeDetail[]) => {
    const router = useRouter();
    const [codes, setCodes] = useState<CodeDetail[]>(initBadCodes);

    const deleteCode = (id: number) => {
        setCodes(codes.filter((code) => code.id !== id));
        router.refresh();
    }

    return {
        codes,
        setCodes,
        deleteCode
    }
}