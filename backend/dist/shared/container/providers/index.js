"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const WinstonLoggerProvider_1 = __importDefault(require("./LoggerProvider/implementations/WinstonLoggerProvider"));
const JoiValidatorProvider_1 = __importDefault(require("./ValidatorProvider/implementations/JoiValidatorProvider"));
const LoggerProviderToken = 'LoggerProvider';
const JoiValidatorProviderToken = 'JoiValidatorProvider';
tsyringe_1.container.registerSingleton(LoggerProviderToken, WinstonLoggerProvider_1.default);
tsyringe_1.container.registerSingleton(JoiValidatorProviderToken, JoiValidatorProvider_1.default);
//# sourceMappingURL=index.js.map