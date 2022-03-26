const SucursalesCtrl = {}
const Sucursal = require('../models/Sucursal.models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

SucursalesCtrl.crearSucursal= async(req, res) => {
    const { nombre, correo, contrasena } = req.body
    const NuevaSucursal = new Sucursal({
        nombre,
        correo,
        contrasena
    })
    const correoSucursal = await Sucursal.findOne({ correo: correo })
    if (correoSucursal) {
        res.json({
            mensaje: 'El correo ya existe'
        })

    } else {
        NuevaSucursal.contrasena = await bcrypt.hash(contrasena, 10)
        const token = jwt.sign({ _id: NuevaSucursal._id }, 'Secreta')
        await NuevaSucursal.save()
        res.json({
            mensaje: 'Bienvenido',
            id: NuevaSucursal._id,
            nombre: NuevaSucursal.nombre,
            token
        })


    }
}

SucursalesCtrl.login = async(req, res) => {
    const { correo, contrasena } = req.body
    const sucursal = await Sucursal.findOne({ correo: correo })
    if (!sucursal) {
        return res.json({
            mensaje: 'Correo incorrecto'
        })

    }

    const match = await bcrypt.compare(contrasena, sucursal.contrasena)
    if (match) {

        const token = jwt.sign({ _id: sucursal._id }, 'Secreta')
        res.json({
            mensaje: 'Bienvenido',
            id: sucursal.id,
            nombre: sucursal.nombre,
            token
        })

    }

    else {
        res.json({
            mensaje: 'Contraseña incorrecta'
        })
    }
}

module.exports = SucursalesCtrl