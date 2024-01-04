const router = require("express").Router()

const solicitacaoController = require("../controllers/solicitacaoController")

router
    .route("/solicitacao")
    .post((req,res) => solicitacaoController.create(req, res));


module.exports = router