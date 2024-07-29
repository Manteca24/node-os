/*En el archivo `osModule.js` deberás sacar los siguientes datos:
- Nombre, Tipo, Versión, Arquitectura, CPUs, Memoria Total, Memoria Libre.
- Memoria Total y Memoria Libre tendrá que estar en MB. Mira que dato dá y qué cáculo debes hacer

**Ejemplo de output:**
Nombre: darwin
Tipo: Darwin
Versión: Darwin Kernel Version 23.1.0: Mon Oct  9 21:27:27 PDT 2023; root:xnu-10002.41.9~6/RELEASE_X86_64
Arquitectura: x64
CPUs: 12
MemoriaTotal: 16384.00 MB
MemoriaLibre: 370.71 MB*/ 

const os = require('os'); // importar el módulo os para obtener info del sistema operativo
// console.log(os);

const systemInfo = {
    nombre: os.hostname(),
    tipo: os.type(),
    version: os.release(),
    arquitectura: os.arch(),
    cpus: os.cpus().length,
    /*Cuando llamamos a os.cpus(), obtenemos una matriz con tantos objetos como núcleos de CPU haya en el sistema. 
    Al agregar .length al final, obtenemos la longitud de esa matriz, es decir, el número de núcleos de CPU.*/
    memoriaTotal: os.totalmem(), // da el dato en bytes
    memoriaLibre: os.freemem(),
};

// pasar a MB (1KB = 1024 bytes; 1MB = 1024 KB ; de byte a megabyte dividimos entre 1024 dos veces)
const memoriaTotalMB = (systemInfo.memoriaTotal / (1024*1024)).toFixed(2); // toFixed para quedarnos solo con 2 decimales
const memoriaLibreMB = (systemInfo.memoriaLibre / (1024*1024)).toFixed(2);

module.exports = {
    nombre: systemInfo.nombre,
    tipo: systemInfo.tipo,
    version: systemInfo.version,
    arquitectura: systemInfo.arquitectura,
    cpus: systemInfo.cpus,
    memoriaTotalMB,
    memoriaLibreMB
};

