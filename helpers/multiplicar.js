
const fs = require('fs');
 




const crearArchivo = async (base = 5, listar= false, hasta = 10) => {

    try {
       

        let salida = '';

        for (let i = 1; i <=hasta; i ++){
            salida += `${base} * ${i} = ${base*i}\n`;
        }

        if (listar) {
            console.log('====================');
            console.log('   Tabla del:', base);
            console.log('====================');
            console.log(salida);
        }

       
      

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);


            return `tabla-${base}.txt`
    } catch (err){
        throw err;
    }

       
}


module.exports = {
   crearArchivo
};

// ESTA ES CON RESOLVE

// const fs = require('fs');


// const crearArchivo = (base = 5) => {

//     return new Promise((resolve, reject) => {

//         console.log('====================');
//         console.log('   Tabla del:', base);
//         console.log('====================');

//         let salida = '';

//         for (let i = 1; i <=10; i ++){
//             salida += `${base} * ${i} = ${base*i}\n`;
//         }

//         console.log(salida);

//         fs.writeFileSync(`tabla-${base}.txt`, salida);


//             resolve(`tabla-${base}.txt`);
//     })
// }


// module.exports = {
//    crearArchivo
// };