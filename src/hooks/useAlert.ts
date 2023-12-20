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
            className: "text-gray-600"
        })
    }

    const successAlert = (message: string) => {
        toast({
            title: message,
            className: "text-green-500"
        })
    }

    return {
        errorAlert,
        successAlert,
        infoAlert
    }
}