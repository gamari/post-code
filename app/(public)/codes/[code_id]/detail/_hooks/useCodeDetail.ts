import { File } from "@/src/types";
import { useCodeDetailContext } from "../_contexts/CodeDetailProvider";

export const useCodeDetail = () => {
    const { selectedFile, setSelectedFile } = useCodeDetailContext();

    const selectFile = (file?: File) => {
        setSelectedFile(file);
    }

    return {
        selectedFile,
        selectFile
    }
}