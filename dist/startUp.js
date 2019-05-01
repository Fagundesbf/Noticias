"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyPaser = require("body-parser");
const cors = require("cors");
const db_1 = require("./infra/db");
const newsController_1 = require("./controller/newsController");
const profissionalController_1 = require("./controller/profissionalController");
const atletasController_1 = require("./controller/atletasController");
class StartUp {
    constructor() {
        this.app = express();
        this._db = new db_1.default();
        this._db.createConnection();
        this.middler();
        this.routes();
    }
    enableCors() {
        const options = {
            methods: "GET, OPTIONS, PUT, PUT, DELETE",
            origin: "*"
        };
        this.app.use(cors(options));
    }
    middler() {
        this.enableCors();
        this.app.use(bodyPaser.json());
        this.app.use(bodyPaser.urlencoded({ extended: false }));
    }
    routes() {
        this.app.route('/').get((req, res) => {
            res.send({ versao: '0.0.1' });
        });
        //newsController
        this.app.route("/api/v1/news").get(newsController_1.default.get);
        this.app.route("/api/v1/news/:id").get(newsController_1.default.getById);
        this.app.route("/api/v1/news").post(newsController_1.default.create);
        this.app.route("/api/v1/news/:id").put(newsController_1.default.update);
        this.app.route("/api/v1/news/:id").delete(newsController_1.default.delete);
        //profissionalController
        this.app.route("/api/v1/profissional").get(profissionalController_1.default.get);
        this.app.route("/api/v1/profissional/:id").get(profissionalController_1.default.getById);
        this.app.route("/api/v1/profissional").post(profissionalController_1.default.create);
        this.app.route("/api/v1/profissional/:id").put(profissionalController_1.default.update);
        //AtletasController
        this.app.route("/api/v1/profissional").get(atletasController_1.default.get);
        this.app.route("/api/v1/profissional/:id").get(atletasController_1.default.getById);
        this.app.route("/api/v1/profissional").post(atletasController_1.default.create);
        this.app.route("/api/v1/profissional/:id").put(atletasController_1.default.update);
    }
}
exports.default = new StartUp();
