const name = require('./names')

const sayHi = (named)=>{
    console.log('hello ther '+ named);

}
require(`./mind-granade`)
sayHi('susn');
sayHi(name.john)
sayHi(name.peter)

