import ProfissionalService from "../services/profissionalService";
import * as HttpStatus from "http-status";

import Helper from "../infra/helper";

class ProfissionalController {
  get(req, res) {
    ProfissionalService.get()
      .then(news => Helper.sendResponse(res, HttpStatus.OK, news))
      .catch(error => console.error.bind(console, `Error ${error}`));
  }

  getById(req, res) {
    const _id = req.params.id;

    ProfissionalService.getById(_id)
      .then(news => Helper.sendResponse(res, HttpStatus.OK, news))
      .catch(error => console.error.bind(console, `Error ${error}`));
  }

  create(req, res) {
    let vm = req.body;

    ProfissionalService.create(vm)
      .then(news =>
        Helper.sendResponse(
          res,
          HttpStatus.OK,
          "Noticia cadastrada com sucesso!"
        )
      )
      .catch(error => console.error.bind(console, `Error ${error}`));
  }

  update(req, res) {
    const _id = req.params.id;
    let news = req.body;

    ProfissionalService.update(_id, news)
      .then(news =>
        Helper.sendResponse(
          res,
          HttpStatus.OK,
          "Notícia foi atualiza com sucesso!"
        )
      )
      .catch(error => console.error.bind(console, `Error ${error}`));
  }

  delete(req, res) {
    const _id = req.params.id;

    ProfissionalService.delete(_id)
      .then(() =>
        Helper.sendResponse(res, HttpStatus.OK, "Noticia deletada com sucesso!")
      )
      .catch(error => console.error.bind(console, `Error ${error}`));
  }
}

export default new ProfissionalController();
