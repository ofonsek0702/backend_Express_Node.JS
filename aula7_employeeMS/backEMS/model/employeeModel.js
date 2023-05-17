const {Validator} = require('jsonschema')
const validator = new Validator()

const employeeSchema = {    
    type: "object",
    properties: {
        id: {type: 'string'},
        name: {type: 'string'},
        age: {type: 'number', minimum :18},
        email: {type:'string'},
        department:{type:'string'}           
    },
    "required": ['name','age','email','department']
  }

  const validateDataEmployee = (e)=>{
    return validator.validate(e,employeeSchema)
  }

  module.exports= {validateDataEmployee}
