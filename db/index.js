let mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/commonPay').then(() => {
  console.log('connect success!')
}).catch(err => {
  console.log(err)
})

// 表规范
const userSchema = new mongoose.Schema({
  id: Number,
  name: String
})
// 表对象
let User = mongoose.model('user', userSchema)
exports.User = User
