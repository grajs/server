export const process = () => {
    return new Promise((resolve: Function) => {
        setTimeout(() => resolve(), 1000)
    })
}