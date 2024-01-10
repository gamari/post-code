export const customFetcher = (...args: any) => {
    const [input, options] = args;
    return fetch(input, {
        ...options,
        next: {
            revalidate: 0
        }
    })
}