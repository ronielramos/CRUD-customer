"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston = __importStar(require("winston"));
class WinstonLoggerProvider {
    constructor() {
        this.format = this.getDefaultFormat();
        this.logger = this.createLogger();
    }
    getDefaultFormat() {
        return winston.format.printf(({ level, message }) => {
            return `[${level}]: - ${message}`;
        });
    }
    createLogger() {
        return winston.createLogger({
            format: winston.format.combine(winston.format.colorize(), this.format),
            transports: [
                new winston.transports.Console({ level: 'debug' })
            ]
        });
    }
    debug(message, ...otherMessages) {
        const messages = [message, ...otherMessages];
        this.logger.debug(messages);
    }
    error(message, ...otherMessages) {
        const messages = [message, ...otherMessages];
        this.logger.error(messages);
    }
    log(message, ...otherMessages) {
        const messages = [message, ...otherMessages];
        this.logger.info(messages);
    }
    warn(message, ...otherMessages) {
        const messages = [message, ...otherMessages];
        this.logger.warn(messages);
    }
}
exports.default = WinstonLoggerProvider;
//# sourceMappingURL=WinstonLoggerProvider.js.map