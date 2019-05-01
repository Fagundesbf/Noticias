"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const atletasSchema = new mongoose.Schema({
    idAtleta: { type: Number },
    nome: { type: String },
    apelido: { type: String },
    pesoInicial: { type: Float32Array },
    pesoAtual: { type: Float32Array },
    image: { type: String },
    active: { type: Boolean },
});
exports.default = atletasSchema;
