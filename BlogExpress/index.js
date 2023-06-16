const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const {SSL_OP_TLS_BLOCK_PADDING_BUG} = require('constants')

app.use(express.static(path.join(__dirname, "static")))

app.use(express.static(path.join(__dirname, "routes/blog.js")))


app.listen(port, ()=>{
    console.log(`Port Name {port}`)
})