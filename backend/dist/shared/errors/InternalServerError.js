"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InternalServerError extends Error {
    constructor(message) {
        super();
        this.statusCode = 500;
        this.message = message;
    }
}
exports.default = InternalServerError;
//# sourceMappingURL=InternalServerError.js.map