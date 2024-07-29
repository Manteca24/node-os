// importar o requerir los dos archivos .js
const {systemInfo} = require('./osModule.js'); 
const {networkInfo} = require('./networkModule.js');
/*OJO la diferencia entre no poner {} y sí ponerlo. Sin poner es una variable se puede llamar como sea se trae solo lo último exportado.
Con {} hacemos destructuring, los nombres tienen que ser iguales, podemos sacar varias cosas.*/


//Mostrar en consola la info de OS e Interfaces
console.log(systemInfo());
console.log(networkInfo());






/*--------------------------------------------------------------------*/ 
// // Obtener y mostrar la información de las interfaces de red
// const networkData = networkInfo();
// // iterar sobre las propiedades de un objeto:
// for (const [iface /*clave*/, details /*valor*/] of Object.entries(networkData)) {
//     console.log(`Interfaz ${iface}:`);
//     details.forEach(detail => {
//         console.log(`  Familia: ${detail.familia}`);
//         console.log(`  Dirección: ${detail.direccion}`);
//         console.log(`  Interno: ${detail.interno}`);
//     });
// }

