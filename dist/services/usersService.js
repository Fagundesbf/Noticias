"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const usersRepository_1 = __importDefault(require("../repository/usersRepository"));
const bson_1 = require("bson");
class UsersService {
    get() {
        return usersRepository_1.default.find({}).populate('news', { _id: bson_1.ObjectID });
    }
    getById(_id) {
        return usersRepository_1.default.findById(_id);
    }
    create(users) {
        return usersRepository_1.default.create(users);
    }
    update(_id, users) {
        return usersRepository_1.default.findByIdAndUpdate(_id, users);
    }
    delete(_id) {
        return usersRepository_1.default.findOneAndDelete(_id);
    }
}
exports.default = new UsersService();
//# sourceMappingURL=usersService.js.map