const {v4:uuidv4} = require('uuid')
const {departments} = require ('./departmentController')
const {validateDataEmployee} = require('../model/employeeModel')
const fs = require('fs')

//let employees = []

//GET
function getEmployeesPromise()
{
    return new Promise((resolve, reject) =>{
        fs.readFile('../backEMS/model/employees.json','utf8',(err,data)=>
        {
            if(err){
                reject(err)
            }
            else
            {
                let employees = JSON.parse(data)
                resolve(employees)
            }
        })
    })
}

const getEmployees = (req,res)=>{
    getEmployeesPromise()
    .then(employees => res.status(200).json(employees))
    .catch(err=> res.status(500).send(err.message))
}

//POST
function addEmployeesPromise(employee) 
{
  return new Promise((resolve, reject) => {      
    fs.readFile('../backEMS/model/employees.json', 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } 
      else {    
                
        let employees = JSON.parse(data)   

        if(employees.some(e=>e.email===employee.email))
        {
            reject(new Error('Email already exists'))                  
        }

        const id = uuidv4()         
        const employeeNew = { id, ...employee }  
        
        employees.push(employeeNew)  
        
        fs.writeFile('../backEMS/model/employees.json', JSON.stringify(employees), (err) => {
          if (err) {
            reject(err);
          } else {
            resolve(employeeNew);
          }
        })
      }
    })
  })
}

const addEmployees = (req,res)=>{
    const employee = req.body

    const validResult = validateDataEmployee(employee)
       
    if(!validResult.valid)
    {
      return res.status(400).json({message:'Invalid employee Data', errors : validResult.errors})
    }    

    if(!departments.includes(employee.department)) 
    {
      return res.status(404).json({message:'Invalid Department'})
    }

    addEmployeesPromise(employee)
    .then(employeeNew => res.status(200).json(employeeNew))
    .catch(err => res.status(500).send(err.message))
}  

module.exports = {getEmployees,addEmployees}