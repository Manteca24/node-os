// importar o requerir los dos archivos .js
const osModule = require('./osModule');
const { networkInfo } = require('./networkModule');

// Mostrar la información del sistema operativo
console.log('Nombre:', osModule.nombre);
console.log('Tipo:', osModule.tipo);
console.log('Versión:', osModule.version);
console.log('Arquitectura:', osModule.arquitectura);
console.log('CPUs:', osModule.cpus);
console.log('Memoria total:', osModule.memoriaTotalMB, 'MB');
console.log('Memoria libre:', osModule.memoriaLibreMB, 'MB');

// Obtener y mostrar la información de las interfaces de red
const networkData = networkInfo();
// iterar sobre las propiedades de un objeto:
for (const [iface /*clave*/, details /*valor*/] of Object.entries(networkData)) {
    console.log(`Interfaz ${iface}:`);
    details.forEach(detail => {
        console.log(`  Familia: ${detail.familia}`);
        console.log(`  Dirección: ${detail.direccion}`);
        console.log(`  Interno: ${detail.interno}`);
    });
}

/*Object.entries() es un método de JavaScript que permite convertir las propiedades enumerables 
de un objeto en una matriz de pares [clave, valor]. 
Cada elemento de esta matriz es a su vez una matriz que contiene dos elementos: 
la clave (o propiedad) y el valor asociado a esa clave.*/ 