const fs = require('fs')
const { userInfo } = require('os')

const Users = (req, res)=>{
    const url = req.url
    const method = req.method
    if (url === '/'){
       // res.setHeader('Content-type', 'text/html')
        res.write(
        `<html>
        <head>
        <title>Node-Udemy</title>
        </head>
        <body>
        <h3>Welcome to the users' page</h3>
        <ul>
            <li>Mohamed Fofanah</li>
            <li>Foday Sesay</li>
            <li>John Snow</li>
            <li>Peter Dinklage</li>
            <li>Jeremiah Victor Harding </li>
        </ul>
        <form action='/create-user' method='POST'>
            <label for='username'>Username</label>
            <input type='text' id='username' name='username'>
            <input type='submit'>
        
        </form>
        </body>
        </html>`)
        
    return res.end()
    }
    if(url==='/create-user' && method === 'POST'){
        const body = []
        req.on('data', (chunk)=>{
            body.push(chunk)
        })
    return req.on('end', ()=>{
        const parse = Buffer.concat(body).toString()
        const userInfo = parse.split('=')[1]
       fs.writeFile('users.txt', userInfo, (err)=>{
        res.statusCode = 302;
        res.setHeader('Location', '/') 
        return res.end()
       })
        
    })
    }
}

module.exports = Users;