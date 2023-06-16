const express = require('express')
const app = express()
const port = 3000


app.get('', (req,res) =>{
    res.send('Hello This is Salman')
} )

app.get('/about', (req,res) =>{

   
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(port, ()=>{
    console.log(`Port Name {port}`)
})