"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const neo4j_driver_1 = __importDefault(require("neo4j-driver"));
const DB_URL = process.env.DB_URL || '';
const DB_USERNAME = process.env.DB_USERNAME || '';
const DB_PASSWORD = process.env.DB_PASSWORD || '';
const neo4jDriver = neo4j_driver_1.default.driver(DB_URL, neo4j_driver_1.default.auth.basic(DB_USERNAME, DB_PASSWORD));
exports.default = neo4jDriver;
//# sourceMappingURL=index.js.map