let express = require("express");
let productos = require("../data/productos.json")
let { dicValidaciones } = require("./filtros/validaciones")
let nombresValidaciones = Object.keys(dicValidaciones)


let app = express()
let PORT = 3000

app.use(express.json())

app.post("/productos/filtrar", (req,res) => {
    let { body } = req
    let respuestas = productos.filter(p => body.every(schema => {
        if (!nombresValidaciones.includes(schema.fn)){
            return res.status(500).json(
                {"error": "no se encuentra esa validacion","fnNombre": schema.fn})
        }

        return dicValidaciones[schema.fn](p,schema.values)
    }))

    return res.status(200).json(respuestas)
})

app.listen(PORT, (e)=> {
    if (e) {
        console.error("no se puede escuchar el puerto: ", PORT)
        process.exit(1)
    }
    
    console.log("escuchando el puerto: ", PORT)
})
