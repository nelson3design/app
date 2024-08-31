const express = require('express')
const router = express.Router()
const data = require('./controllers/receiveData')

router.post('/data',data.data)
router.get('/api',(req, res)=>{
    res.status(200).json({status: 200,msg:"api running..."})
})

router.get('/', (req, res) => {
    res.status(200).json({ status: 200, msg: "App running..." })
})

module.exports = router 