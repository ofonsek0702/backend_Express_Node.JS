const fs = require('fs')

function createFile(namefile, content)
{
    return new Promise((resolve, reject)=>{
        fs.writeFile(namefile, content, err =>{
            if(err) return reject(err)
            resolve()
        })

    })
}

createFile('testfsPromise.txt','Text: Testing Write File with Promise \r\n')
.then(()=> console.log('Success'))
.catch(err => console.log(err))

