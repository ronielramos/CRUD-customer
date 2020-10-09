"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = require("console");
class ConsoleLoggerProvider {
    debug(message, ...otherMessages) {
        console_1.debug(message, otherMessages);
    }
    error(message, ...otherMessages) {
        console_1.error(message, otherMessages);
    }
    log(message, ...otherMessages) {
        console_1.info(message, otherMessages);
    }
    warn(message, ...otherMessages) {
        console_1.warn(message, otherMessages);
    }
}
exports.default = ConsoleLoggerProvider;
//# sourceMappingURL=ConsoleLoggerProvider.js.map