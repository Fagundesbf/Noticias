"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const atletasRepository_1 = require("../repository/atletasRepository");
class AtletasService {
    get() {
        return atletasRepository_1.default.find({});
    }
    getById(_id) {
        return atletasRepository_1.default.findById(_id);
    }
    create(atletas) {
        return atletasRepository_1.default.create(atletas);
    }
    update(_id, atletas) {
        return atletasRepository_1.default.findByIdAndUpdate(_id, atletas);
    }
    delete(_id) {
        return atletasRepository_1.default.findByIdAndRemove(_id);
    }
}
exports.default = new AtletasService();
