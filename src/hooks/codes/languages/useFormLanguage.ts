import { Language } from "@/src/types";
import { useState } from "react";

export const useFormLanguage = () => {
    const [language, setLanguage] = useState("");
    const [suggestedLanguages, setSuggestedLanguages] = useState<Language[]>([]);

    return {
        language,
        setLanguage,
    }
}