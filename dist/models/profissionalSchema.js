"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = __importStar(require("mongoose"));
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
//# sourceMappingURL=profissionalSchema.js.map