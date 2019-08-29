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
const usersService_1 = __importDefault(require("../services/usersService"));
const HttpStatus = __importStar(require("http-status"));
const helper_1 = __importDefault(require("../infra/helper"));
class UsersController {
    get(req, res) {
        usersService_1.default.get()
            .then(user => helper_1.default.sendResponse(res, HttpStatus.OK, user))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    getById(req, res) {
        const _id = req.params.id;
        usersService_1.default.getById(_id)
            .then(user => helper_1.default.sendResponse(res, HttpStatus.OK, user))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    create(req, res) {
        let vm = req.body;
        usersService_1.default.create(vm)
            .then(user => helper_1.default.sendResponse(res, HttpStatus.OK, "Usuário cadastrado com sucesso!"))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    update(req, res) {
        const _id = req.params.id;
        let user = req.body;
        usersService_1.default.update(_id, user)
            .then(user => helper_1.default.sendResponse(res, HttpStatus.OK, "Usuário foi atualiza com sucesso!"))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    delete(req, res) {
        const _id = req.params.id;
        usersService_1.default.delete(_id)
            .then(() => helper_1.default.sendResponse(res, HttpStatus.OK, "Usuario deletado com sucesso!"))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
}
exports.default = new UsersController();
//# sourceMappingURL=usersController.js.map