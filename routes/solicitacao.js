const router = require("express").Router()
const solicitacaoController = require("../controllers/solicitacaoController")
const upload = require('../middlewares/uploadMiddleare'); 


router
    .route("/cadastro")
    .post((req,res) => solicitacaoController.create(req, res));

router
    .route("/consulta")
    .get((req,res) => solicitacaoController.getAll(req,res));

router
    .route("/consultaId/:id")
    .get((req,res) => solicitacaoController.getID(req,res));


router
    .route("/upload/:id/:documento")
    .post(upload.single('file'), solicitacaoController.uploadFile) 



module.exports = router