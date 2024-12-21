import express from 'express'

const app = express()

app.get('/', (req, res)=>{
    res.send('Hola esta es una prueba, para comprobar los servicios de node js')
})


app.listen(3000)
console.log('Server on port', 3000)