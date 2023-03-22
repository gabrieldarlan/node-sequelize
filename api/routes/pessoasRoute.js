const { Router } = require("express");
const PessoaController = require("../controller/PessoaController");

const router = Router();

router.get("/pessoas", PessoaController.pegaTodasAsPessoas);
router.get("/pessoas/:id", PessoaController.pegaUmaPessoa);
router.put("/pessoas/:id", PessoaController.atualizaPessoa);
router.post("/pessoas", PessoaController.criaPessoa);
router.delete("/pessoas/:id", PessoaController.apagaPessoa);
router.get(
  "/pessoas/:estudanteId/matricula/:matriculaId",
  PessoaController.pegaUmaMatricula
);
router.post("/pessoas/:estudanteId/matricula", PessoaController.criaMatricula);
router.put(
  "/pessoas/:estudanteId/matricula/:matriculaId",
  PessoaController.atualizaMatricula
);
router.delete(
  "/pessoas/:estudanteId/matricula/:matriculaId",
  PessoaController.apagaMatricula
);
module.exports = router;
