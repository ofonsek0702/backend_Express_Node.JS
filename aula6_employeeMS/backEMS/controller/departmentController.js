let departments = ['Security','Network','Analyst']


const getDepartments = (req,res)=>{
    res.status(200).json(departments)
}

const addDepartments= (req,res)=>{
    const department = req.body
    departments.push(department.department)
    res.status(200).json(departments)
}

const removeDepartment = (req,res)=>{
    const department = req.params.department
    const index = departments.findIndex((d)=>d.department===department)

    if(index === -1)
    {
        return res.status(404).json({message:'Department not found'})
    }
    departments.splice(index,1)
    res.status(200).json({message:' Department Deleted'})  
   
}

module.exports={departments, getDepartments,addDepartments,removeDepartment}