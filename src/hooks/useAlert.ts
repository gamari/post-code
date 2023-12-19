import { useToast } from "../components/ui/use-toast"

export const useAlert = () => {
    const { toast } = useToast();

    const errorAlert = (message: string, e: any) => {
        console.log(e);
        const errorMessage = e?.message;

        if (errorMessage) {
            toast({
                title: message,
                description: errorMessage,
            })
        } else {
            toast({
                title: message,
            })
        }
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