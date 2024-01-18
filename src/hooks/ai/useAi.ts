import { useEffect, useState } from "react"
import OpenAI from "openai";

export const useAi = () => {
    const [aiKey, setAiKey] = useState("")
    const [loading, setLoading] = useState(false)

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

    const createConcrete = async (content: string) => {
        if (!aiKey) throw new Error("aiKeyが設定されていません");
        if (!content) throw new Error("内容を入力して下さい。");

        try {
            setLoading(true)

            const openai = new OpenAI({
                apiKey: aiKey,
                dangerouslyAllowBrowser: true
            });
            const prompt = `Javaを利用して、以下の記事の内容の具体例を書いてください。

${content}`
            const completion = await openai.chat.completions.create({
                messages: [{ role: "user", content: prompt }],
                model: "gpt-3.5-turbo",
            });

            if (!completion?.choices?.length) throw new Error("AIとの通信に失敗しました。");
            const message = completion.choices[0].message.content || "";
            return message
        } catch (e) {
            throw e;
        } finally {
            setLoading(false)
        }
    }

    return { aiKey, setAiKey, saveAiKey, createConcrete, loading }
}