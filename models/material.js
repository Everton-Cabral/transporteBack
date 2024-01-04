const mongoose = require("mongoose")
const { Schema } = mongoose;

const materialSchema = new Schema({
    codSap: String,
    descricao: String,
    qtd: Number,
    unidade: String,
    comprimento: Number,
    altura: Number,
    largura: Number,
    volume: Number,
    peso: Number,
    pesoTotal: Number,
    estivacao: String,
    solicitacao: { type: Schema.Types.ObjectId, ref: 'Solicitacao' },
})
const Material = mongoose.model('Material', materialSchema);
module.exports = Material;