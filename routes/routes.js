const express = require('express');
const router = express.Router();

const Controllers = require('../Controllers/Controller');

router.get('/', Controllers.create);
router.get('/listar', Controllers.listagem);
router.get('/add', Controllers.acessarFormulario);
router.post('/add', Controllers.adicionar);
router.get('/edit/:id', Controllers.editar);
router.post('/edit/:id', Controllers.edicao);
router.delete('/delete/:id', Controllers.delete);

module.exports = router;
