const express = require("express");
const bodyParser = require("body-parser");
const app = express()

app.listen('8088', () => {
  console.log('server start!')
})

app.use(bodyParser.urlencoded({extend: true}))
app.use(bodyParser.json())
// 拦截请求
app.use((req, res, next) => {
  console.log(req.method, req.url)
  next()
})

exports.app = app
