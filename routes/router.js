const router = require("express").Router()

// Solicitação Rota

const solicitacaoRouter = require("./solicitacao")


router.use("/solicitacao", solicitacaoRouter)



module.exports = router;