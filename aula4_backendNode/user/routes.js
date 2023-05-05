const express = require('express')
const router = express.Router()
const path = require('path')

const pathfile = path.join(__dirname,'/aula4form.html')


function functMidUser(req, res, next){
    console.log('Middleware User function')
    return next()
}

router.get('/add/form', (req,res)=>{    
    res.sendFile(pathfile)
})

router.get('/:id', functMidUser,(req,res)=>{
    const id = req.params.id
    res.send('User with id:'+ id)
})

module.exports = router

