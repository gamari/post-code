import { useToast } from "../components/ui/use-toast"

export const useAlert = () => {
    const { toast } = useToast();

    const errorAlert = (message: string, e: any) => {
        console.log(e);
        toast({
            title: message,
        })
    }

    const infoAlert = (message: string) => {
        toast({
            title: message,
        })
    }

    return {
        errorAlert,
        infoAlert
    }
}