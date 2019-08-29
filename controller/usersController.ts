import usersService from "../services/usersService";
import * as HttpStatus from "http-status";

import Helper from "../infra/helper";

class UsersController {
  get(req, res) {
    usersService.get()
      .then(user => Helper.sendResponse(res, HttpStatus.OK, user))
      .catch(error => console.error.bind(console, `Error ${error}`));
  }

  getById(req, res) {
    const _id = req.params.id;

    usersService.getById(_id)
      .then(user => Helper.sendResponse(res, HttpStatus.OK, user))
      .catch(error => console.error.bind(console, `Error ${error}`));
  }

  create(req, res) {
    let vm = req.body;

    usersService.create(vm)
      .then(user =>
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
    let user = req.body;

    usersService.update(_id, user)
      .then(user =>
        Helper.sendResponse(
          res,
          HttpStatus.OK,
          "Usuário foi atualiza com sucesso!"
        )
      )
      .catch(error => console.error.bind(console, `Error ${error}`));
  }
  delete(req, res) {
    const _id = req.params.id;

    usersService.delete(_id)
      .then(() =>
        Helper.sendResponse(res, HttpStatus.OK, "Usuario deletado com sucesso!")
      )
      .catch(error => console.error.bind(console, `Error ${error}`));
  }

}

export default new UsersController();
