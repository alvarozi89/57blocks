//requiremos las dependencias necesarias
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const bodyparser = require('body-parser')
require('./database')


//Configuramos para escuchar el puerto

app.set('Port', process.env.PORT || 4000);
app.use(morgan('dev'))
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(cors({ origen: '*' }))

app.use('/sucursal', require('./routes/Sucursal.routes'))
app.use('/producto', require('./routes/Productos.routes'))

//prueba para escuchar el puerto

app.listen(app.get('Port'), () => {
    console.log('Servidor escuchando por el puertooo :', app.get('Port'))
})






