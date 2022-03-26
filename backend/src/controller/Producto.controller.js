const ProductoCtrl = {}
const Producto = require('../models/Productos.models')

ProductoCtrl.crear = async(req, res) => {

    const { titulo,descripcion,categoria,precio,sucursal,sucursalNombre } = req.body
    const NuevoProducto = new Producto({
        titulo,
        descripcion,
        categoria,
        precio,
        sucursal,
        sucursalNombre
    })


    const respuesta = await NuevoProducto.save()
    res.json({
        mensaje: 'Producto creado',
        respuesta
    })

}

ProductoCtrl.listar = async(req, res) => {
    const respuesta = await Producto.find()
    res.json(respuesta)

}

ProductoCtrl.listarId = async(req, res) => {
    const id = req.params.id
    const respuesta = await Producto.findById({ _id: id })
    res.json(respuesta)

}

ProductoCtrl.ProductoDeUnaSucursal = async(req, res) => {
    const id = req.params.id
    const respuesta = await Producto.find({ sucursal: id })
    res.json(respuesta)

}

ProductoCtrl.eliminar = async(req, res) => {
    const id = req.params.id
    await Producto.findByIdAndRemove({ _id: id })
    res.json({
        mensaje: 'Producto eliminado'
    })

}


ProductoCtrl.actualizar = async(req, res) => {
    const id = req.params.id
    await Producto.findByIdAndUpdate({ _id: id }, req.body)
    res.json({
        mensaje: 'Producto actualizado'
    })

}

ProductoCtrl.buscarProducto = async(req, res) => {
    const {nombres,id} = req.params.nombres
    
    const respuesta = await Sucursal.find({ nombres: { $regex: ".*" + nombres + ".*" },sucursal:id })
    res.json(respuesta)

}


ProductoCtrl.buscarProductoCriterio= async(req, res) => {
    const categoria = req.params.criterio;

    try {

        const respuesta = await Producto.find({ categoria: categoria });
        res.json(respuesta)


    } catch (error) {
        return res.status(400).json({
            mensaje: 'ocurrio error',
            error
        })
    }

};

module.exports = ProductoCtrl