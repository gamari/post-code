import { useToast } from "../components/ui/use-toast"

export const useAlert = () => {
    const { toast } = useToast();

    const errorAlert = (message: string, e?: any) => {
        console.log(e);
        const errorMessage = e?.message;

        if (errorMessage) {
            toast({
                title: message,
                description: errorMessage,
                className: "text-red-500"
            })
        } else {
            toast({
                title: message,
                className: "text-red-500"
            })
        }
    }

    const infoAlert = (message: string) => {
        toast({
            title: message,
            className: "text-sky-600"
        })
    }

    return {
        errorAlert,
        infoAlert
    }
}