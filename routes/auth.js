const express = require("express")
const {authResponse,providerResponse,deleteCookie} = require("../helpers/authResponse")
const AuhtService = require("../services/auth")

function auth(app){
    const router = express.Router()
    app.use("/auth",router)

    const authServ = new AuhtService()

    router.post("/login",async (req,res)=>{
        const result = await authServ.login(req.body)

        return authResponse(res,result,401)
    })

    router.post("/register",async (req,res)=>{
        const result = await authServ.signup(req.body)

        return authResponse(res,result,400)
    })



}module.exports = auth