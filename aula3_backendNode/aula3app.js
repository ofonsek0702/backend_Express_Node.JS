const express = require('express')
const app = express()
const path = require('path')

const port = 3333

const pathfile = path.join(__dirname,'/aula3home.html')

app.get('/about',(req,res)=>{
    res.send('about page')
})
 
app.get('/user/:id', (req,res)=>{
    const id = req.params.id
    res.send('User with id:'+ id)
})

app.get('/',(req,res)=>{
    res.sendFile(pathfile)
})

app.listen(port,()=>{
    console.log('Server running')
})

