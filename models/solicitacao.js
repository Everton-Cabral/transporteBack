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
    distancia: String,
    materiais: [{
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
    }],
    motorista:{
        nome: String,
        telefone: String,
        crlv: String,
        antt: String,
        cnhMotorista: String,
        cnhProprietario: String,
        comprovanteResidencia: String,
    }
})
const Solicitacao = mongoose.model('Solicitacao', solicitacaoSchema);
module.exports = Solicitacao;