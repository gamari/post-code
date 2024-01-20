import { useState } from "react";

export const usePaginate = () => {
    const [page, setPage] = useState(1);

    const nextPage = () => setPage(page + 1);
    const prevPage = () => setPage(page - 1);

    return {
        page,
        nextPage,
        prevPage
    }
}