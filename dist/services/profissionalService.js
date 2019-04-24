"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const profissionalRepository_1 = require("../repository/profissionalRepository");
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
        return profissionalRepository_1.default.findByIdAndRemove(_id);
    }
}
exports.default = new ProfissionalService();
