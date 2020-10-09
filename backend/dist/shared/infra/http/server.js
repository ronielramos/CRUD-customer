"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
require("reflect-metadata");
require("../../container");
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const tsyringe_1 = require("tsyringe");
const BadRequestError_1 = __importDefault(require("../../errors/BadRequestError"));
const neo4j_1 = __importDefault(require("../neo4j"));
const routes_1 = __importDefault(require("./routes"));
const path_1 = __importDefault(require("path"));
const app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
const logger = tsyringe_1.container.resolve('LoggerProvider');
app.use('/api', routes_1.default);
const frontend = path_1.default.join(__dirname, '..', '..', '..', '..', '..', 'frontend', 'dist');
app.use(express_1.default.static(frontend));
app.use((req, res) => {
    res.sendFile(path_1.default.join(frontend, 'index.html'));
});
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err, _req, res, _next) => {
    logger.error(err);
    if (err instanceof BadRequestError_1.default) {
        return res
            .status(err.statusCode)
            .json({ message: err.message, status: 'error' });
    }
    return res
        .status(500)
        .json({ message: 'Internal server error', status: 'error' });
});
app.listen(process.env.PORT, async () => {
    await neo4j_1.default.verifyConnectivity();
    logger.log('✅ - neo4j on');
    logger.log('✅ - listening on ' + process.env.PORT);
});
//# sourceMappingURL=server.js.map