const router = require("express").Router()

const solicitacaoController = require("../controllers/solicitacaoController")

router
    .route("/cadastro")
    .post((req,res) => solicitacaoController.create(req, res));

router
    .route("/consulta")
    .get((req,res) => solicitacaoController.getAll(req,res));

router
    .route("/consultaId/:id")
    .get((req,res) => solicitacaoController.getID(req,res));


module.exports = router