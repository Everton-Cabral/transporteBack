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
                distancia: req.body.distancia,
                materiais: req.body.materiais,
            };
            
            const response = await Solicitacao.create(solicitacao);
            res.status(201).json({ response, msg: "Solicitação Criada com Sucesso" });

        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Erro interno do servidor" });
        }
    },

    getAll: async (req,res) =>{
        try{
            const solicitacoes = await Solicitacao.find();
            res.json(solicitacoes)
        } catch (error){
            console.log(error)
        }
    },
    getID: async (req,res) =>{
        try{
            const id = req.params.id
            const solicitacao = await Solicitacao.findById(id);
            res.json(solicitacao)
        } catch (error){
            console.log(error)
        }
    },
}

module.exports = solicitacaoController;
