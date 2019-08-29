"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const profissionalService_1 = __importDefault(require("../services/profissionalService"));
const HttpStatus = __importStar(require("http-status"));
const helper_1 = __importDefault(require("../infra/helper"));
class ProfissionalController {
    get(req, res) {
        profissionalService_1.default.get()
            .then(profissional => helper_1.default.sendResponse(res, HttpStatus.OK, profissional))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    getById(req, res) {
        const _id = req.params.id;
        profissionalService_1.default.getById(_id)
            .then(profissional => helper_1.default.sendResponse(res, HttpStatus.OK, profissional))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    create(req, res) {
        let vm = req.body;
        profissionalService_1.default.create(vm)
            .then(profissional => helper_1.default.sendResponse(res, HttpStatus.OK, "Usuário cadastrado com sucesso!"))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    update(req, res) {
        const _id = req.params.id;
        let profissional = req.body;
        profissionalService_1.default.update(_id, profissional)
            .then(profissional => helper_1.default.sendResponse(res, HttpStatus.OK, "Usuário foi atualiza com sucesso!"))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    delete(req, res) {
        const _id = req.params.id;
        profissionalService_1.default.delete(_id)
            .then(() => helper_1.default.sendResponse(res, HttpStatus.OK, "Profissional deletado com sucesso!"))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
}
exports.default = new ProfissionalController();
//# sourceMappingURL=profissionalController copy.js.map