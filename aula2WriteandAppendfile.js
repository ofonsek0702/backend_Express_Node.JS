const fs = require('fs')


fs.writeFile('testfs.txt','Text: Testing Write File \r\n', err =>{
    if(err) console.log('Erro') 
    else console.log('Success')
})


fs.appendFile('testfs.txt','Adding some text to created file \r\n', err =>{
    if(err) console.log('Erro') 
    else console.log('Success')
})

