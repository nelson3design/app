require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 5000 
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.json())
const router = require('./routes')
const { config } = require('dotenv')
app.use(router)

app.listen(port,()=>{
    console.log(`App running on port ${port}`)
})
