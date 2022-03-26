const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ProductoSchema = new Schema({
    titulo: { type: String, required: [true, 'Titulo obligatorio'] },
    descripcion: String,
    categoria: String,
    precio: Number,
    sucursal:String,
    sucursalNombre: String,
  
    date: { type: Date, default: Date.now },
    activo: { type: Boolean, default: true }
});

// Convertir a modelo

module.exports = mongoose.model('Producto', ProductoSchema)


