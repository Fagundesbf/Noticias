import * as mongoose from 'mongoose';

const atletasSchema = new mongoose.Schema({

    idAtleta: { type: Number },
    nome: { type: String },
    apelido: { type: String },
    pesoInicial: { type: Float32Array },
    pesoAtual: { type: Float32Array },
    image : { type: String },
    active: { type: Boolean },

});
export default atletasSchema;