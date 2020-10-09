"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const neo4j_driver_1 = __importDefault(require("neo4j-driver"));
const neo4j_1 = __importDefault(require("../../../../shared/infra/neo4j"));
class CustomerRepository {
    constructor() {
        this.driver = neo4j_1.default;
        this.READ = neo4j_driver_1.default.session.READ;
        this.WRITE = neo4j_driver_1.default.session.WRITE;
    }
    formatDateForNeo4j(date) {
        const validDateObj = new Date(date);
        const year = validDateObj.getFullYear();
        const month = validDateObj.getMonth();
        const day = validDateObj.getDate();
        const dateNeo4J = new neo4j_driver_1.default.types.Date(year, month, day);
        return dateNeo4J;
    }
    formatCustomer(queryResult) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const records = queryResult.records.map(record => record.toObject());
        const customers = records.map(record => {
            return {
                ...record.customer.properties,
                birthdate: new Date(record.customer.properties.birthdate),
                createdAt: new Date(record.customer.properties.createdAt)
            };
        });
        return customers;
    }
    async create(customerData) {
        const session = this.driver.session({ defaultAccessMode: this.READ });
        const customerToCreate = {
            ...customerData,
            active: true,
            birthdate: this.formatDateForNeo4j(customerData.birthdate)
        };
        const query = `
      MERGE (customer: Customer {
        id: apoc.create.uuid(),
        CPF: $CPF,
        active: $active,
        birthdate: date($birthdate),
        createdAt: datetime(),
        email: $email,
        name: $name,
        phone: $phone
      })

      RETURN customer
      LIMIT 1
    `;
        const result = await session.run(query, customerToCreate);
        await session.close();
        const customers = this.formatCustomer(result);
        return customers[0];
    }
    async findById(id) {
        const session = this.driver.session({ defaultAccessMode: this.WRITE });
        const query = `
      MATCH (customer: Customer)
      WHERE customer.id = $id
      RETURN customer
      LIMIT 1
    `;
        const result = await session.run(query, { id });
        await session.close();
        const customers = this.formatCustomer(result);
        return customers[0];
    }
    async find(name, limit = 10, skip = 0) {
        const session = this.driver.session({ defaultAccessMode: this.WRITE });
        const whereName = name ? 'WHERE customer.name CONTAINS $name' : '';
        const query = `
      MATCH (customer: Customer)
      ${whereName}
      RETURN customer
      SKIP $skip
      LIMIT $limit
    `;
        const result = await session.run(query, { limit, name, skip });
        await session.close();
        const customers = this.formatCustomer(result);
        return customers;
    }
    async remove(id) {
        const session = this.driver.session({ defaultAccessMode: this.WRITE });
        const query = `
      MATCH (customer: Customer)
      WHERE customer.id = $id
      DELETE customer
    `;
        await session.run(query, { id });
        await session.close();
        return { removed: true };
    }
    async update(id, customerData) {
        const session = this.driver.session({ defaultAccessMode: this.WRITE });
        const query = `
      MATCH (customer: Customer { id: $id })
      SET customer += {
        birthdate: date($birthdate),
        email: $email,
        name: $name,
        phone: $phone
      }
      RETURN customer
      LIMIT 1
    `;
        const parameters = {
            ...customerData,
            birthdate: this.formatDateForNeo4j(customerData.birthdate),
            id
        };
        const result = await session.run(query, parameters);
        await session.close();
        const customers = this.formatCustomer(result);
        return customers[0];
    }
}
exports.default = CustomerRepository;
//# sourceMappingURL=CustomerRepository.js.map