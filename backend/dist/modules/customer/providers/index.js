"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const JoiCustomerSchemaProvider_1 = require("./CustomerSchemaProvider/implementations/JoiCustomerSchemaProvider");
tsyringe_1.container.registerSingleton('JoiCustomerSchemaProvider', JoiCustomerSchemaProvider_1.JoiCustomerSchemaProvider);
//# sourceMappingURL=index.js.map