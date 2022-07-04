// 导入express
let express = require('express')

// 创建web服务器
let app = express()

app.listen('3000', () => {
  console.log('server start!')
})

app.get('/list', (req, res) => {
  res.send({text: 'Hello World!'})
})
