const mongoose = require("mongoose")
const { Schema } = mongoose;

const solicitacaoSchema = new Schema({
    nome: String,
    email: String,
    orgao: String,
    telefone: String,
    migo: String,
    pep: String,
    urgente: Boolean,
    diaReserva: Date,
    diaLimite: Date,
    enderecoPartida: String,
    enderecoDestino: String,
})
const Solicitacao = mongoose.model('Solicitacao', solicitacaoSchema);
module.exports = Solicitacao;