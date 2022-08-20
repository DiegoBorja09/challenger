const express = require("express")
const cookie = require("cookie-parser")
require("dotenv").config()

port= process.env.PORT
// Routes:
const auth = require("./routes/auth")
const per =require("./routes/personajes")
const mov=require("./routes/movies")
const gen=require("./routes/generos")


const app = express()

app.use(express.json())
app.use(cookie())

// Usando rutas:
auth(app)
per(app)
mov(app)
gen(app)

app.get("/",(req,res)=>{
    return res.json({
        name:"challenger v1"
    })
})

app.listen(port,()=>{
    console.log("Listening: http://localhost:"+port)
})