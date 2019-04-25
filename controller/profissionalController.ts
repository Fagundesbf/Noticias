import ProfissionalService from "../services/profissionalService";
import * as HttpStatus from "http-status";

import Helper from "../infra/helper";

class ProfissionalController {
  get(req, res) {
    ProfissionalService.get()
      .then(profissional => Helper.sendResponse(res, HttpStatus.OK, profissional))
      .catch(error => console.error.bind(console, `Error ${error}`));
  }

  getById(req, res) {
    const _id = req.params.id;

    ProfissionalService.getById(_id)
      .then(profissional => Helper.sendResponse(res, HttpStatus.OK, profissional))
      .catch(error => console.error.bind(console, `Error ${error}`));
  }

  create(req, res) {
    let vm = req.body;

    ProfissionalService.create(vm)
      .then(profissional =>
        Helper.sendResponse(
          res,
          HttpStatus.OK,
          "Usuário cadastrado com sucesso!"
        )
      )
      .catch(error => console.error.bind(console, `Error ${error}`));
  }

  update(req, res) {
    const _id = req.params.id;
    let profissional = req.body;

    ProfissionalService.update(_id, profissional)
      .then(profissional =>
        Helper.sendResponse(
          res,
          HttpStatus.OK,
          "Usuário foi atualiza com sucesso!"
        )
      )
      .catch(error => console.error.bind(console, `Error ${error}`));
  }

}

export default new ProfissionalController();
