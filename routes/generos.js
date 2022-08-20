const express = require("express")
const Generoservice =require("../services/genero")

function genero(app){
    const router = express.Router()
    const generoservice = new Generoservice()

    app.use("/genero",router)

    router.get("/:id", async (req,res)=>{
        const per = await generoservice.getByid(req.params.id) // Array de usuarios

        return res.json(per)
    })

    router.get("/", async (req,res)=>{
        const per = await generoservice.get() // Array de usuarios

        return res.json(per)
    })

    router.post("/crear",async (req,res)=>{
        const result = await generoservice.create(req.body)
        return res.json(result)
    })
    router.put("/update",async (req,res)=>{
        const result = await generoservice.updategen(req.body)
        return res.json(result)
    })

    router.delete("/:id",async (req,res)=>{
        const user = await generoservice.delete(req.params.id)
        return res.json(user)
    })




}module.exports =genero