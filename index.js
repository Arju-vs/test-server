require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./routes/router')
require('./config/connection')

const tServer = express()

tServer.use(cors())
tServer.use(express.json())
tServer.use(router)


const PORT = 3000 || process.env.PORT
tServer.listen(PORT,()=>{
    console.log(`Test Server started at port : ${PORT} and waiting for client request!!!!`);
})

// http://localhost:3000/ - get
tServer.get('/',(req,res)=>{
    res.status(200).send(`<h1 style="color:red">Test Server started at port and waiting for client request!!!!</h1>`)
})

