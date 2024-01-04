const  Solicitacao  = require("../models/solicitacao");

const solicitacaoController = {
    
    create: async (req, res) => {
        try {
            const solicitacao = {
                nome: req.body.nome,
                email: req.body.email,
                orgao: req.body.orgao,
                telefone: req.body.telefone,
                migo: req.body.migo,
                pep: req.body.pep,
                urgente: req.body.urgente,
                diaReserva: req.body.diaReserva,
                diaLimite: req.body.diaLimite,
                enderecoPartida: req.body.enderecoPartida,
                enderecoDestino: req.body.enderecoDestino,
            };
            console.log("Dados de entrada:", solicitacao);
            const response = await Solicitacao.create(solicitacao);
            res.status(201).json({ response, msg: "Solicitação Criada com Sucesso" });
            console.log("Solicitação criada com sucesso:", response);

        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Erro interno do servidor" });
        }
    }
}

module.exports = solicitacaoController;
