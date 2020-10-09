"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JoiCustomerSchemaProvider = void 0;
const joi_1 = __importDefault(require("@hapi/joi"));
class JoiCustomerSchemaProvider {
    constructor() {
        this.schema = joi_1.default.object().keys({
            CPF: joi_1.default.string().pattern(/[0-9]/).length(11)
                .error(_err => Error('CPF must follow pattern 00000000000')),
            birthdate: joi_1.default.date().max(new Date()),
            email: joi_1.default.string().email(),
            name: joi_1.default.string().min(2),
            phone: joi_1.default.string().min(9).max(19)
        }).required();
    }
    validate(customerDTO) {
        const errorFinded = this.schema.validate(customerDTO);
        return {
            error: errorFinded.error
        };
    }
}
exports.JoiCustomerSchemaProvider = JoiCustomerSchemaProvider;
//# sourceMappingURL=JoiCustomerSchemaProvider.js.map