const express = require("express")
const Personajeservice =require("../services/personajes")

function personajes(app){
    const router = express.Router()
    const personajeservice = new Personajeservice()

    app.use("/characters",router)

    router.get("/:id", async (req,res)=>{
        const per = await personajeservice.getByid(req.params.id) // Array de usuarios

        return res.json(per)
    })

    router.get("/detalle/:id", async (req,res)=>{
        const per = await personajeservice.getBydetalle(req.params.id) // Array de usuarios

        return res.json(per)
    })
    router.get("/", async (req,res)=>{
        const per = await personajeservice.get() // Array de usuarios

        return res.json(per)
    })

    router.post("/crear",async (req,res)=>{
        const result = await personajeservice.create(req.body)
        return res.json(result)
    })

    router.put("/update",async (req,res)=>{
        const result = await personajeservice.updateper(req.body)
        return res.json(result)
    })

    router.delete("/:id",async (req,res)=>{
        const user = await personajeservice.delete(req.params.id)
        return res.json(user)
    })
    

    router.get("/nombre/:nombre", async (req,res)=>{
        const per = await personajeservice.getByname(req.params.nombre) // Array de usuarios

        return res.json(per)
    })
    router.get("/edad/:edad", async (req,res)=>{
        const per = await personajeservice.getByedad(req.params.edad) // Array de usuarios

        return res.json(per)
    })
    router.get("/peso/:peso", async (req,res)=>{
        const per = await personajeservice.getBypeso(req.params.peso) // Array de usuarios

        return res.json(per)
    })

    router.get("/movies/:id", async (req,res)=>{
        const per = await personajeservice.getBymovies(req.params.id) // Array de usuarios

        return res.json(per)
    })





}module.exports =personajes
