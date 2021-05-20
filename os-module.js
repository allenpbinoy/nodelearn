const os = require('os');

//info about user



const currOs ={
    name:os.type(),
    release:os.release(),
    totalMem: os.totalmem(),
    freemem: os.freemem()
}
console.log(currOs);