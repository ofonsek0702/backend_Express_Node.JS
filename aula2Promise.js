function add(a, b) {
    return new Promise((resolve, reject) => {
      if (typeof a !== 'number' || typeof b !== 'number') {
        reject(new Error('Parameter not is a number'));
      } else {        
        resolve(a+b);
      }
    });
  }


add(10, 20)
//add(10,'20')
.then(res => console.log(`${res}`))
.catch(err => console.error(err));

