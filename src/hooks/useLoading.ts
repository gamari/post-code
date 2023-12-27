import { useState } from "react";

export const useLoading = (init?: boolean) => {
    const [loading, setLoading] = useState(init || false);

    const startLoading = () => setLoading(true);
    const stopLoading = () => setLoading(false);

    return { loading, startLoading, stopLoading };
}