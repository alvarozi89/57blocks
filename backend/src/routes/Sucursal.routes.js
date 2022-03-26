const { Router } = require('express')
const router = Router()
const SucursalesCtrl = require('../controller/Sucursal.controller')

router.post('/crear', SucursalesCtrl.crearSucursal)
router.post('/login', SucursalesCtrl.login)
module.exports = router