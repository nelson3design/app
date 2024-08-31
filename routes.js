const express = require('express')
const router = express.Router()
const data = require('./controllers/receiveData')

router.post('/data',data.data)
router.get('/api',(req, res)=>{
    res.status(200).json({ status: 200, msg: "api running...", version: "1.0.0" })
})

router.get('/', (req, res) => {
    res.status(200).json({ status: 200, msg: "App running...", version:"1.0.0"})
})

module.exports = router 