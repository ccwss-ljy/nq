const express = require('express')

const db = require('./db')

const router = express.Router()


router.get('/get',(req, res)=>{
    const installCard = req.query.no
    console.log(req.query)
    db.query('select * from sheet1 where no=?', installCard, (err,result)=>{
        res.setHeader("Access-Control-Allow-Origin",'*')
        if(err) {
            return res.send(err.message)
        }
        res.send(result)
    })
})



module.exports = router