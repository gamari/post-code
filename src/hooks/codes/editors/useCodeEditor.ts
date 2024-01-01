import { useCodeEditorContext } from "@/src/contexts/editors/CodeEditorProvider"
import { Language, Tag } from "@/src/types";

export const useCodeEditor = () => {
    const { code, setCode } = useCodeEditorContext();

    function setTitle(title: string) {
        if (!code) return;
        setCode({
            ...code,
            title
        })
    }

    function setDescription(description: string) {
        if (!code) return;
        setCode({
            ...code,
            description
        });
    }

    function setIsPublic(isPublic: boolean) {
        if (!code) return;
        setCode({
            ...code,
            is_public: isPublic
        });
    }

    function setLanguage(language?: Language) {
        if (!code) return;
        setCode({
            ...code,
            language
        });
    }

    function addTag(tag: Tag) {
        if (!code) return;
        if (!code?.tags) return;
        setCode({
            ...code,
            tags: [...code?.tags, tag]
        });
    }

    function removeTag(tag: Tag) {
        if (!code) return;
        if (!code?.tags) return;
        setCode({
            ...code,
            tags: code?.tags.filter(t => t.id !== tag.id)
        });
    }

    return {
        code,
        setDescription,
        setIsPublic,
        setLanguage,
        setTitle,
        addTag,
        removeTag
    }
}