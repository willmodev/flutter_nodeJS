const { Router } = require('express');
const { consultarclientes, agregarclientes, modificarcliente, eliminarcliente} = require('../controllers/cliente.controller')
const router = Router();


router.get('/api/clientes', consultarclientes);
router.post('/api/clientes/registro', agregarclientes);
router.put('/api/clientes/modificar', modificarcliente);
router.delete('/api/clientes/eliminar/:id', eliminarcliente);



module.exports = router;