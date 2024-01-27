const  Solicitacao  = require("../models/solicitacao");;
const AWS = require('aws-sdk')
const upload = require('../middlewares/uploadMiddleare'); 
const path = require('path');



const fs = require('fs');





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
   
    uploadFile: async (req,res) =>{
        try{
            const { id } = req.params.id;
            const { documento } = req.params.documento;
            const { file } = req;

            if (!file) {
                return res.status(400).send('Nenhum arquivo enviado');
              } else{
                console.log('arquivo enviado')
                console.log(id)
              }
                // Obtenha o conteúdo do arquivo como Buffer
                const fileContent = file.buffer;

              const params = {
                Bucket: 'transporte-files',
                Key: `uploads/${id}/${documento}/${file.originalname}`,
                Body: fileContent,
                ContentType: file.mimetype,
                ContentDisposition: 'inline',
              };
              // Utiliza o SDK da AWS configurado globalmente
             await req.app.get('s3').upload(params).promise();
        

        } catch (error){
            console.error('Erro durante o upload para o S3:', error);
            return res.status(500).json({ message: 'Erro durante o upload para o S3', error: error.message });
        }
    } 
}

module.exports = solicitacaoController;
