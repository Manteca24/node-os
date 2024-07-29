/*En el archivo `networkModule.js` deberás sacar los siguientes datos de red:
- Interfaz
- Dentro de cada interfaz habrá que sacar la Familia, dirección e Interno.

**Ejemplo de output:**
Interfaz lo0:
  Familia: IPv4
  Dirección: 127.0.0.1
  Interno: true
  Familia: IPv6
  Dirección: ::1
  Interno: true
  Familia: IPv6
  Dirección: fe80::1
  Interno: true

Interfaz en5:
  Familia: IPv6s
  Dirección: fe80::aede:48ff:fe00:1122
  Interno: false*/

  const os = require('os');

  const networkInfo = () => {
      const interfaces = os.networkInterfaces();
      // método os.networkInterfaces() para obtener un objeto que contiene una lista de las interfaces de red disponibles
      // en el sistema. console.log(os.networkInterfaces()) para ver la estructura
      const networkData = {}; 
  
      for (const iface in interfaces) {
          networkData[iface] = interfaces[iface].map(details => {
              return {
                  familia: details.family,
                  direccion: details.address,
                  interno: details.internal,
              };
          });
      }
  
      return networkData;
      
  };

  module.exports = { networkInfo };