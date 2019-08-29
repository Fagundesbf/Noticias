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
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swaggerDocument = __importStar(require("./swagger.json"));
const db_1 = __importDefault(require("./infra/db"));
const newsController_1 = __importDefault(require("./controller/newsController"));
const profissionalController_1 = __importDefault(require("./controller/profissionalController"));
const usersController_1 = __importDefault(require("./controller/usersController"));
class StartUp {
    constructor() {
        this.app = express_1.default();
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
        this.app.use(cors_1.default(options));
    }
    middler() {
        this.enableCors();
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.route('/').get((req, res) => {
            res.send({ versao: '0.0.1' });
        });
        this.app.use('/swagger', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
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
        this.app.route("/api/v1/profissional/:id").delete(profissionalController_1.default.delete);
        //UsuarioController 
        this.app.route("/api/v1/users").get(usersController_1.default.get);
        this.app.route("/api/v1/users/:id").get(usersController_1.default.getById);
        this.app.route("/api/v1/users").post(usersController_1.default.create);
        this.app.route("/api/v1/users/:id").put(usersController_1.default.update);
        this.app.route("/api/v1/users/:id").delete(usersController_1.default.delete);
    }
}
exports.default = new StartUp();
//# sourceMappingURL=startUp.js.map