

// console.log(argv.base);



// let parametro = argv[2];
// let base = parametro.split('=')[1]


// const { argv } = require('process');
// const { options } = require('yargs');

const { crearArchivo } = require('./helpers/multiplicar');
const argv = require ('./config/yargs');

// require (' colors ') ; 
             

console.clear();

// const [, , arg3 = 'base=5'] = process.argv;
// const [, base= 5 ] = arg3.split('=');

// console.log(process.argv);
// console.log(argv);

// console.log('base: yargs', argv.base)


// const base = 5;


 crearArchivo(argv.b, argv.l, argv.h)
   .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
   .catch(err => console.log(err));
    



