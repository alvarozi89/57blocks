const { Router } = require('express')
const router = Router()
const ProductoCtrl = require('../controller/Producto.controller')
const Auth = require('../helper/Auth')

router.post('/crear', Auth.verificarToken, ProductoCtrl.crear)
router.get('/listarProductos', Auth.verificarToken, ProductoCtrl.listar)
router.get('/listar/:id', Auth.verificarToken, ProductoCtrl.listarId)
router.get('/listarCriterio/:criterio', Auth.verificarToken, ProductoCtrl.buscarProductoCriterio)
router.get('/listarProductosSucursal/:id', Auth.verificarToken, ProductoCtrl.ProductoDeUnaSucursal)
router.delete('/eliminar/:id', Auth.verificarToken, ProductoCtrl.eliminar)
router.put('/actualizar/:id', Auth.verificarToken, ProductoCtrl.actualizar)
router.get('/buscar/:nombres/:id', Auth.verificarToken, ProductoCtrl.buscarProducto)

module.exports = router

