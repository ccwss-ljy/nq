// 1.导入express
const express = require('express')

const cors = require('cors')

// 导入路由
const router = require('./route')

// 2.创建web服务器
const app = express()

app.use(cors())

app.use('/api', router)

// 3.启动web服务器
app.listen(60000, ()=>{
    console.log('express server running');
})