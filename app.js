const { crearTabla } = require ('./helpers/multiplicar')
const argv = require('./config/yargs')


//const base = -1;
console.clear();

// const [ , ,arg3 = "base=5" ] = process.argv
// const [, base = 5] = arg3.split("=");    

crearTabla(argv.b , argv.l ,argv.m)
.then(res=>{
    console.log(res)  
}).catch(err => console.log(err));