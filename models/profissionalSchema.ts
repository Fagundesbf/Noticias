import * as mongoose from 'mongoose';

const profissionalSchema = new mongoose.Schema({

    idProfissional: { type: String },
    nome: { type: String },
    projeto: { type: String },
    sprint: { type: String },
    image: { type: String },
    dataInicio : { type: Date },
    active: { type: Boolean },

});
export default profissionalSchema;