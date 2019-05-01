"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const atletasService_1 = require("../services/atletasService");
const HttpStatus = require("http-status");
const helper_1 = require("../infra/helper");
class AtletasController {
    get(req, res) {
        atletasService_1.default.get()
            .then(news => helper_1.default.sendResponse(res, HttpStatus.OK, news))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    getById(req, res) {
        const _id = req.params.id;
        atletasService_1.default.getById(_id)
            .then(news => helper_1.default.sendResponse(res, HttpStatus.OK, news))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    create(req, res) {
        let vm = req.body;
        atletasService_1.default.create(vm)
            .then(news => helper_1.default.sendResponse(res, HttpStatus.OK, "Noticia cadastrada com sucesso!"))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    update(req, res) {
        const _id = req.params.id;
        let news = req.body;
        atletasService_1.default.update(_id, news)
            .then(news => helper_1.default.sendResponse(res, HttpStatus.OK, "Notícia foi atualiza com sucesso!"))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    delete(req, res) {
        const _id = req.params.id;
        atletasService_1.default.delete(_id)
            .then(() => helper_1.default.sendResponse(res, HttpStatus.OK, "Noticia deletada com sucesso!"))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
}
exports.default = new AtletasController();
