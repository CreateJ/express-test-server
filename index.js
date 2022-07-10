let {app} = require('./app')
let {User} = require('./db')


app.post('/list', (req, res) => {
  console.log('get list')
  console.log(req.body)
  const {pageNo = 1, pageSize = 10} = req.body
  User.find().skip(((pageNo - 1) * pageSize)).limit(pageSize).then(r => {
    User.find().then(totalRes => {
      res.send({
        code: "0",
        data: {
          list: r,
          total: totalRes.length,
          pageSize,
          pageNo
        }
      })
    })
  })
})
