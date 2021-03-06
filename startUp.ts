import  express from "express";
import bodyPaser from "body-parser";
import  cors from 'cors';

import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './swagger.json';

import Database from "./infra/db";
import NewsController from "./controller/newsController";
import ProfissionalController from "./controller/profissionalController";
import UsersController from "./controller/usersController";
import usersController from "./controller/usersController";



class StartUp{
    public app: express.Application;
    private _db:Database;
    private bodyParser;
    

    constructor() {
        this.app  =  express();       
        this._db = new Database(); 
        this._db.createConnection();
        this.middler();
        this.routes(); 
    }

    enableCors(){
        const options: cors.CorsOptions={
            methods: "GET, OPTIONS, PUT, PUT, DELETE",
            origin:"*"
        }

        this.app.use(cors(options))
    }

    middler(){
        this.enableCors();
        this.app.use(bodyPaser.json());
        this.app.use(bodyPaser.urlencoded({extended:false}));
    }

    routes(){
        this.app.route('/').get((req,res)=>{
             res.send({ versao:'0.0.1'});
        });

        this.app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

        //newsController

        this.app.route("/api/v1/news").get(NewsController.get);
        this.app.route("/api/v1/news/:id").get(NewsController.getById); 
        this.app.route("/api/v1/news").post(NewsController.create);
        this.app.route("/api/v1/news/:id").put(NewsController.update); 
        this.app.route("/api/v1/news/:id").delete(NewsController.delete); 

        //profissionalController

        this.app.route("/api/v1/profissional").get(ProfissionalController.get);
        this.app.route("/api/v1/profissional/:id").get(ProfissionalController.getById); 
        this.app.route("/api/v1/profissional").post(ProfissionalController.create);
        this.app.route("/api/v1/profissional/:id").put(ProfissionalController.update); 
        this.app.route("/api/v1/profissional/:id").delete(ProfissionalController.delete); 

        //UsuarioController 
        this.app.route("/api/v1/users").get(usersController.get);      
        this.app.route("/api/v1/users/:id").get(usersController.getById);      
        this.app.route("/api/v1/users").post(usersController.create);      
        this.app.route("/api/v1/users/:id").put(usersController.update);      
        this.app.route("/api/v1/users/:id").delete(usersController.delete);      
     
    }

}
export default new StartUp();