import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'
import productsRoutes from './routes/products.routes'

const app = express()

//Metodo para guardar una variable en express
app.set('pkg', pkg)

//Para que lea los archivos en formato json
app.use(express.json())

//Middleware para ver en consola cada vez que hacen una peticion a nuestro servidor
app.use(morgan('dev'))

app.get('/', (req, res) =>{
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    })
})

app.use('/products', productsRoutes)

export default app;

