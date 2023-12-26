import { Language } from "@/src/types";
import { useState } from "react";

export const useSuggestLanguageList = () => {
    const [suggestedLanguages, setSuggestedLanguages] = useState<Language[]>([]);

    return {
        suggestedLanguages,
        setSuggestedLanguages,
    }
}