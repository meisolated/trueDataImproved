function dateNTime() {
    return new Date().toLocaleString()
}
function log(message: string, type: string, by: string, user?: string) {
    // use this in incase we decide to use a database
    const style = type ? "info" ? "\x1b[36m%s\x1b[0m" : "warn" ? "\x1b[36m%s\x1b[0m" : "error" ? "\x1b[33m%s\x1b[0m" : "\x1b[33m%s\x1b[0m" : "\x1b[33m%s\x1b[0m"
    console.log(style, `[${type.toUpperCase()}] [${dateNTime()}] [${by}] - ${message}`)
}
export default class logger {
    static log(message: string, user?: boolean, userEmail?: string) {
        const by = user ? "user-" + userEmail : "server"
        log(message, "log", by, userEmail)

    }

    static error(message: string, user?: boolean, userEmail?: string) {
        const by = user ? "user-" + userEmail : "server"
        log(message, "error", by, userEmail)
    }

    static warn(message: string, user?: boolean, userEmail?: string) {
        const by = user ? "user-" + userEmail : "server"
        log(message, "warn", by, userEmail)
    }
    static info(message: string, user?: boolean, userEmail?: string) {
        const by = user ? "user-" + userEmail : "server"
        log(message, "info", by, userEmail)
    }
}