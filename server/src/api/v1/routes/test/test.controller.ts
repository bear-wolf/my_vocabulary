export const general = (req: any, res: any, next: any) => {
    res
        .status(200)
        .send("Site is working!")
}

export default {
    general
}