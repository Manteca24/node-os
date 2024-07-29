/*En el archivo `osModule.js` deberás sacar los siguientes datos:
- Nombre, Tipo, Versión, Arquitectura, CPUs, Memoria Total, Memoria Libre.
- Memoria Total y Memoria Libre tendrá que estar en MB. Mira que dato dá y qué cáculo debes hacer
*/ 

const os = require('node:os'); // importar el módulo os para obtener info del sistema operativo.
// hay que poner node delante para definir que lo queremos sacar de node y evitar problemas. Lo pone la documentación.
// console.log(os);

const systemInfo = () => {
    return {
        nombre: os.hostname(),
        tipo: os.type(),
        version: os.release(), // también podríamos usar os.version(), da más datos  
        arquitectura: os.arch(),
        cpus: os.cpus().length,
        /*Cuando llamamos a os.cpus(), obtenemos una matriz con tantos objetos como núcleos de CPU haya en el sistema. 
        Al agregar .length al final, obtenemos la longitud de esa matriz, es decir, el número de núcleos de CPU.*/
        memoriaTotal: (os.totalmem() / (1024*1024)).toFixed(2), 
        memoriaLibre: (os.freemem() / (1024*1024)).toFixed(2)
    }
};

module.exports = {systemInfo}
