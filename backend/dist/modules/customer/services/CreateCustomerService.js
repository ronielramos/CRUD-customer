"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-useless-constructor */
const tsyringe_1 = require("tsyringe");
const JoiValidatorProvider_1 = __importDefault(require("../../../shared/container/providers/ValidatorProvider/implementations/JoiValidatorProvider"));
const JoiCustomerSchemaProvider_1 = require("../providers/CustomerSchemaProvider/implementations/JoiCustomerSchemaProvider");
const BadRequestError_1 = __importDefault(require("../../../shared/errors/BadRequestError"));
let CreateCustomerService = class CreateCustomerService {
    constructor(customerRepository, joiCustomerSchemaProvider, joiValidatorProvider) {
        this.customerRepository = customerRepository;
        this.joiCustomerSchemaProvider = joiCustomerSchemaProvider;
        this.joiValidatorProvider = joiValidatorProvider;
    }
    async execute(customerData) {
        const result = this.joiValidatorProvider.validate(customerData, this.joiCustomerSchemaProvider);
        if (!result.valid)
            throw new BadRequestError_1.default(result.messages.join('\n'));
        const createdCustomer = await this.customerRepository.create(customerData);
        return createdCustomer;
    }
};
CreateCustomerService = __decorate([
    tsyringe_1.injectable(),
    __param(0, tsyringe_1.inject('CustomerRepository')),
    __param(1, tsyringe_1.inject('JoiCustomerSchemaProvider')),
    __param(2, tsyringe_1.inject('JoiValidatorProvider')),
    __metadata("design:paramtypes", [Object, JoiCustomerSchemaProvider_1.JoiCustomerSchemaProvider,
        JoiValidatorProvider_1.default])
], CreateCustomerService);
exports.default = CreateCustomerService;
//# sourceMappingURL=CreateCustomerService.js.map