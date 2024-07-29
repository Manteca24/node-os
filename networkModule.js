/*En el archivo `networkModule.js` deberás sacar los siguientes datos de red:
- Interfaz
- Dentro de cada interfaz habrá que sacar la Familia, dirección e Interno.
*/

  const os = require('node:os');

  const networkInfo = () => {
    const interfaces = os.networkInterfaces();
      // método os.networkInterfaces() para obtener un objeto que contiene una lista de las interfaces de red disponibles
      // en el sistema. console.log(os.networkInterfaces()) para ver la estructura

    for(const  [name, iface] of Object.entries(interfaces)){
    console.log(`Interfaz: ${name}`)
    iface.forEach(detail=>{
        console.log(`   Familia: ${detail.family}`)
        console.log(`   Dirección: ${detail.address}`)
        console.log(`   Interno: ${detail.internal}`)
    })    
    };
    return "--------------------------------------------";
}

module.exports = { networkInfo };

/*Object.entries() es un método de JavaScript que permite convertir las propiedades enumerables 
de un objeto en una matriz de pares [clave, valor]. 
Cada elemento de esta matriz es a su vez una matriz que contiene dos elementos: 
la clave (o propiedad) y el valor asociado a esa clave.*/ 



/*----Con map, más refactorizado todavía:---------------------------------------------------------------------- 


const networkInfo = () => {
    const interfaces = os.networkInterfaces();
    const result = {};

    for (const [name, iface] of Object.entries(interfaces)) {
        result[name] = iface.map(detail => ({
            familia: detail.family,
            direccion: detail.address,
            interno: detail.internal
        }));
    }
    
    return result;
};

--------------*/


