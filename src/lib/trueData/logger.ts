import chalk from "chalk"

const _log = console.log
const red = chalk.red
const yellow = chalk.yellow
const blue = chalk.blue
const green = chalk.green
const cyan = chalk.cyan
const magenta = chalk.magenta
const white = chalk.white
const gray = chalk.gray

function dateNTime() {
    return new Date().toLocaleString()
}
function log(message: string, type: string, by: string, user?: string) {

    if (user) {
        if (type === "error") _log(red(`[${type.toUpperCase()}] [${dateNTime()}] [${by}] [${user}] - ${message}`))
        else if (type === "warn") _log(yellow(`[${type.toUpperCase()}] [${dateNTime()}] [${by}] [${user}] - ${message}`))
        else if (type === "info") _log(white(`[${type.toUpperCase()}] [${dateNTime()}] [${by}] [${user}] - ${message}`))
        else if (type === "debug") _log(green(`[${type.toUpperCase()}] [${dateNTime()}] [${by}] [${user}] - ${message}`))
        else _log(`[${type.toUpperCase()}] [${dateNTime()}] [${by}] [${user}] - ${message}`)
        return
    }
    else {
        if (type === "error") _log(red(`[${type.toUpperCase()}] [${dateNTime()}] [${by}] - ${message}`))
        else if (type === "warn") _log(yellow(`[${type.toUpperCase()}] [${dateNTime()}] [${by}] - ${message}`))
        else if (type === "info") _log(white(`[${type.toUpperCase()}] [${dateNTime()}] [${by}] - ${message}`))
        else if (type === "debug") _log(green(`[${type.toUpperCase()}] [${dateNTime()}] [${by}] - ${message}`))
        else _log(`[${type.toUpperCase()}] [${dateNTime()}] [${by}] - ${message}`)
        return
    }

}
export default class logger {
    static log(message: string, user?: boolean, userId?: string, server?: string) {
        const by = user ? "user-" + userId : server ? "server-" + server : "server"
        log(message, "log", by, userId)
    }

    static error(message: string, user?: boolean, userId?: string, server?: string) {
        const by = user ? "user-" + userId : server ? "server-" + server : "server"
        log(message, "error", by, userId)
    }

    static warn(message: string, user?: boolean, userId?: string, server?: string) {
        const by = user ? "user-" + userId : server ? "server-" + server : "server"
        log(message, "warn", by, userId)
    }

    static info(message: string, user?: boolean, userId?: string, server?: string) {
        const by = user ? "user-" + userId : server ? "server-" + server : "server"
        log(message, "info", by, userId)
    }

    static debug(message: string, user?: boolean, userId?: string, server?: string) {
        const by = user ? "user-" + userId : server ? "server-" + server : "server"
        log(message, "debug", by, userId)
    }
}
