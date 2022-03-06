const argv = require("yargs")
  .option("b", {
    //el b es como el alias pero en diminutivo,este sale en el obj argv
    alias: "base",
    type: "number", //su valor que sea de tipo numero
    demandOption: true, //esto creo que lo hace requerido
    describe:"crear una tabla"
  })
  .option("l", {
    alias: "listado",
    type: "boolean", 
    describe:"Muestra el listado de la tabla",
    default:false  //por defecto que este en false es decir si el usuario no pone --l
  })
  .option("h", {
    alias: "hasta",
    type: "number", 
    default:10,
    describe:"Poner un limite en la tabla",
  })
  .check((args, options) => {
    if (isNaN(args.b)) {
      //isnan intenta convertir el parámetro pasado a un número.
      //Si el parámetro no se puede convertir, devuelve true,es decir le envimaos un string; en caso contrario, devuelve false.,es decir le mandamos un numero puede ser "4"
      throw "La base tiene que ser un numero"; //este le manda al catch
    }
    return true; //este es para que los args pasados son correctos
  }).argv;


  module.exports = argv