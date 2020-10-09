"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const CustomerRepository_1 = __importDefault(require("../../modules/customer/infra/neo4j/CustomerRepository"));
require("../../modules/customer/providers");
require("./providers");
const CustomerRepositoryToken = 'CustomerRepository';
tsyringe_1.container.registerSingleton(CustomerRepositoryToken, CustomerRepository_1.default);
//# sourceMappingURL=index.js.map