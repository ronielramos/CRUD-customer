"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class JoiValidatorProvider {
    validate(object, schema) {
        const validateReturn = {
            messages: [],
            valid: true
        };
        const result = schema.validate(object);
        if (result.error) {
            validateReturn.messages.push(result.error.message);
            validateReturn.valid = false;
        }
        return validateReturn;
    }
}
exports.default = JoiValidatorProvider;
//# sourceMappingURL=JoiValidatorProvider.js.map