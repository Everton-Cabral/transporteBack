const router = require("express").Router()

// Solicitação Rota

const solicitacaoRouter = require("./solicitacao")

router.use("/", solicitacaoRouter)

module.exports = router;