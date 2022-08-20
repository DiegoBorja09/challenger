const express = require("express")
const Moviesservice =require("../services/movies")


function movies(app){

    const router = express.Router()
    const moviesservice = new Moviesservice()

    app.use("/movies",router)

    router.get("/:id", async (req,res)=>{
        const per = await moviesservice.getByid(req.params.id) // Array de usuarios

        return res.json(per)
    })

    router.get("/detalle/:id", async (req,res)=>{
        const per = await moviesservice.getBydetalle(req.params.id) // Array de usuarios

        return res.json(per)
    })

    router.get("/", async (req,res)=>{
        const per = await moviesservice.get() // Array de usuarios

        return res.json(per)
    })

    router.post("/crear",async (req,res)=>{
        const result = await moviesservice.create(req.body)
        return res.json(result)
    })

    router.put("/update",async (req,res)=>{
        const result = await moviesservice.updatemov(req.body)
        return res.json(result)
    })

    router.delete("/:id",async (req,res)=>{
        const user = await moviesservice.delete(req.params.id)
        return res.json(user)
    })

    router.get("/titulo/:titulo", async (req,res)=>{
        const per = await moviesservice.getBytitulo(req.params.titulo) // Array de usuarios

        return res.json(per)
    })

    router.get("/genero/:id", async (req,res)=>{
        const per = await moviesservice.getBygenero(req.params.id) // Array de usuarios

        return res.json(per)
    })
    router.get("/order/:order", async (req,res)=>{
        const per = await moviesservice.getorder(req.params.order) // Array de usuarios

        return res.json(per)
    })



}module.exports =movies