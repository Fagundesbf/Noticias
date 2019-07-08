"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const profissionalRepository_1 = __importDefault(require("../repository/profissionalRepository"));
class ProfissionalService {
    get() {
        return profissionalRepository_1.default.find({});
    }
    getById(_id) {
        return profissionalRepository_1.default.findById(_id);
    }
    create(profissional) {
        return profissionalRepository_1.default.create(profissional);
    }
    update(_id, profissional) {
        return profissionalRepository_1.default.findByIdAndUpdate(_id, profissional);
    }
    delete(_id) {
        return profissionalRepository_1.default.findOneAndDelete(_id);
    }
}
exports.default = new ProfissionalService();
//# sourceMappingURL=profissionalService.js.map