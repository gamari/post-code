import { useEffect, useState } from "react"

export const useAi = () => {
    const [aiKey, setAiKey] = useState("")

    useEffect(() => {
        // LocalStorageから取得
        const aiKey = localStorage.getItem("aiKey")
        if (aiKey) {
            setAiKey(aiKey)
        }
    }, [])

    const saveAiKey = (aiKey: string) => {
        localStorage.setItem("aiKey", aiKey)
        setAiKey(aiKey)
    }

    return { aiKey, setAiKey, saveAiKey }
}