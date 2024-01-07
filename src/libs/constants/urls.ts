export const X_URL = (id: string) => {
    return `https://twitter.com/${id}`
}

export const CODES_EDIT_URL = (id: number) => {
    return `/dashboard/codes/${id}/edit`;
}

export const CODES_DETAIL_URL = (id?: number) => {
    return `/codes/${id}/detail`;
}