"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CustomerController_1 = __importDefault(require("../controllers/CustomerController"));
const customerRouter = express_1.Router();
const customerController = new CustomerController_1.default();
customerRouter.post('/', customerController.create);
customerRouter.patch('/:id', customerController.update);
customerRouter.get('/', customerController.find);
customerRouter.get('/:id', customerController.findById);
customerRouter.delete('/:id', customerController.remove);
exports.default = customerRouter;
//# sourceMappingURL=CustomerRoutes.js.map