"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
class Database {
    constructor() {
        // private DB_URl  = 'mongodb://localhost:17017/db_portal'
        //private DB_URl  = 'mongodb://link-db/db_portal'
        // private DB_URl  = 'mongodb://admin:ndqm08h1@ds145916.mlab.com:45916/noticias-api'
        this.DB_URl = 'mongodb://admin:admin123@ds145916.mlab.com:45916/noticias-api';
    }
    createConnection() {
        mongoose_1.default.connect(this.DB_URl, { useNewUrlParser: true });
    }
}
exports.default = Database;
//# sourceMappingURL=db.js.map