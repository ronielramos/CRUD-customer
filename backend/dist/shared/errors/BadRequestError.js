"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BadRequestError extends Error {
    constructor(message) {
        super();
        this.statusCode = 400;
        this.message = message;
    }
}
exports.default = BadRequestError;
//# sourceMappingURL=BadRequestError.js.map