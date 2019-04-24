"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const profissionalSchema = new mongoose.Schema({
    idProfissional: { type: String },
    nome: { type: String },
    projeto: { type: String },
    sprint: { type: String },
    image: { type: String },
    dataInicio: { type: Date },
    active: { type: Boolean },
});
exports.default = profissionalSchema;
