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
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-useless-constructor */
const tsyringe_1 = require("tsyringe");
let FindCustomerByIdService = class FindCustomerByIdService {
    constructor(customerRepository) {
        this.customerRepository = customerRepository;
    }
    async execute(id) {
        const customer = await this.customerRepository.findById(id);
        return customer;
    }
};
FindCustomerByIdService = __decorate([
    tsyringe_1.injectable(),
    __param(0, tsyringe_1.inject('CustomerRepository')),
    __metadata("design:paramtypes", [Object])
], FindCustomerByIdService);
exports.default = FindCustomerByIdService;
//# sourceMappingURL=FindCustomerByIdService.js.map