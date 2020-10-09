"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CustomerRoutes_1 = __importDefault(require("../../../../modules/customer/infra/http/routes/CustomerRoutes"));
const routes = express_1.Router();
routes.use('/v1/customer', CustomerRoutes_1.default);
exports.default = routes;
//# sourceMappingURL=index.js.map