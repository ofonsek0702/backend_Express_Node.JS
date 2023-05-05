const express = require('express')
const app = express()
const path = require('path')

const users = require('./user/routes')

const port = 3333

const pathfile = path.join(__dirname,'/aula4home.html')


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/user',users)


app.get('/about',(req,res)=>{
    res.send('about page')
})

app.get('/',(req,res)=>{
    res.sendFile(pathfile)
})

app.get('/err',(req,res,next)=>{
    setImmediate(()=>{
        next(new Error('Url Problem'))
    })
})

app.use((err, req, res, next)=>{
    console.log('erro in the web site')
    res.status(500).json({msg : err.message})
})

app.listen(port,()=>{
    console.log('Server running')
})

