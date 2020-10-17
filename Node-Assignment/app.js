const http = require('http')

const Users = require('./users')

const app = http.createServer(Users)

app.listen(3000,()=>{
    console.log('Server is on')
})