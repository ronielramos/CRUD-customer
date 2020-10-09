"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const CreateCustomerService_1 = __importDefault(require("../../../services/CreateCustomerService"));
const RemoveCustomerService_1 = __importDefault(require("../../../services/RemoveCustomerService"));
const UpdateCustomerService_1 = __importDefault(require("../../../services/UpdateCustomerService"));
const FindCustomerByIdService_1 = __importDefault(require("../../../services/FindCustomerByIdService"));
const FindCustomerService_1 = __importDefault(require("../../../services/FindCustomerService"));
const BadRequestError_1 = __importDefault(require("../../../../../shared/errors/BadRequestError"));
class CustomerController {
    async create(req, res) {
        const { CPF, birthdate, email, name, phone } = req.body;
        const createCustomer = tsyringe_1.container.resolve(CreateCustomerService_1.default);
        const customer = await createCustomer.execute({
            CPF,
            birthdate,
            email,
            name,
            phone
        });
        return res.json(customer);
    }
    async update(req, res) {
        const { id } = req.params;
        const { birthdate, email, name, phone } = req.body;
        const updateCustomer = tsyringe_1.container.resolve(UpdateCustomerService_1.default);
        const customer = await updateCustomer.execute(id, {
            birthdate,
            email,
            name,
            phone
        });
        return res.json(customer);
    }
    async remove(req, res) {
        const { id } = req.params;
        if (!id)
            throw new BadRequestError_1.default('Atenção, ID não foi recebido!');
        const removeCustomer = tsyringe_1.container.resolve(RemoveCustomerService_1.default);
        const customer = await removeCustomer.execute(id);
        return res.json(customer);
    }
    async findById(req, res) {
        const { id } = req.params;
        const findCustomerById = tsyringe_1.container.resolve(FindCustomerByIdService_1.default);
        const customer = await findCustomerById.execute(id);
        return res.json(customer);
    }
    async find(req, res) {
        const { name, limit, skip } = req.query;
        const findCustomer = tsyringe_1.container.resolve(FindCustomerService_1.default);
        const customer = await findCustomer.execute(name, limit, skip);
        return res.json(customer);
    }
}
exports.default = CustomerController;
//# sourceMappingURL=CustomerController.js.map