"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const startUp_1 = __importDefault(require("./startUp"));
// import swaggerUi from 'swagger-ui-express';
// import * as swaggerDocument from './swagger.json';
let port = process.env.PORT || '3050';
startUp_1.default.app.listen(port, function () {
    console.log(`servidor execultando na porta ${port}`);
});
//# sourceMappingURL=program.js.map