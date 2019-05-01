import * as express from "express";
import * as bodyPaser from "body-parser";
import * as cors from 'cors';

import Database from "./infra/db";
import NewsController from "./controller/newsController";
import ProfissionalController from "./controller/profissionalController";
import AtletasController from "./controller/atletasController";



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

        //AtletasController

        this.app.route("/api/v1/profissional").get(AtletasController.get);
        this.app.route("/api/v1/profissional/:id").get(AtletasController.getById); 
        this.app.route("/api/v1/profissional").post(AtletasController.create);
        this.app.route("/api/v1/profissional/:id").put(AtletasController.update); 
    }

}
export default new StartUp();