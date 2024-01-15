import { useFilesContext } from "@/src/contexts/FilesProvider"

export const useFiles = () => {
    const { files } = useFilesContext();

    // ファイル名から取得する処理
    const getFileByFilename = (filename: string) => {
        return files.find((file) => {
            return file.name === filename
        });
    };

    return {
        getFileByFilename
    }
}