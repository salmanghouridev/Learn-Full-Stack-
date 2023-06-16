const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.use(express.static(path.join(__dirname, "public")))

app.get('/hello/:name', (req,res) =>{
    // res.send('Hello This is Salman')
    res.send('Hello This is Salman' + req.params.name)
} )

app.get('/about', (req,res) =>{

   
    // res.sendFile(path.join(__dirname, 'index.html'))
    res.json({"Salman": 24})
})

app.listen(port, ()=>{
    console.log(`Port Name {port}`)
})