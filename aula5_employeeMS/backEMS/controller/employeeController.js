const {v4:uuidv4} = require('uuid')

let employees = []

const getEmployees = (req,res)=>{
    res.status(200).json(employees)
}

const addEmployees = (req,res)=>{
    const employee = req.body

    employee.id = uuidv4()
    employees.push(employee)
    res.status(200).json(employee)
}

const updateEmployees = (req,res)=>{
    res.send('Update Employee')
}

const removeEmployees = (req,res)=>{      
    res.send('Remove Employee')
}

module.exports = {getEmployees,addEmployees,updateEmployees,removeEmployees}