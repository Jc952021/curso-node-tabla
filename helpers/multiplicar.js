const fs = require("fs");

//al hacer una funcion async estaria devolviendo una promesa
const getMultiplicar = async (data,l=false,limit=10) => {
 
  try {
  
    let salida = "";
    let consola =""
    for (let i = 1; i <= limit; i++) {
      salida += `${i} x ${data} = ${i * 5}\n`;
      consola += `${i} x ${data} = ${i * 5}\n`; //aqui se pone el codigo de colores,me dio flojera
    }
    if(l){
      console.log("LISTADO")
      console.log(consola)
    }
    //con el sync no es necesario poner el error,pero el error se vera con el try catch

    fs.writeFileSync(`./salida/tabla del ${data}.txt`, salida);
    return `tabla de ${data}`;
  } catch (error) {
    throw error;
  }
};

//en node se exporta con module.exports
module.exports = {
  getMultiplicar,
};
