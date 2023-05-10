const express  = require('express')
const app = express()

const employeeRoutes = require('./routes/employeeRoutes')

const host = '127.0.0.1'
const port = 3333

app.use(express.json())
app.use('/employees',employeeRoutes)

app.listen(port, host,()=>{
    console.log(`Server running at http://${host}:${port}`)
})