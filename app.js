const { getMultiplicar } = require("./helpers/multiplicar");
const argv = require("./config/yargs")

console.log(argv);

// const data = 5;
// let salida = ""
// for (let i = 1; i <= 10; i++) {
//   salida+=`${i} x ${data} = ${i*5}\n`
// }

getMultiplicar(argv.b,argv.l,argv.h)
  .then((res) => console.log(res, "creado"))
  .catch((err) => console.log(err, "MAL"));
//con node se puede crear archivos en el servidor
//ir a la doc de node - writefile
//https://nodejs.org/dist/latest-v16.x/docs/api/fs.html#fswritefilefile-data-options-callback
//importar para callback

//el fs recibe en el 1 param el nombre del archivo a crear como .txt
//2 un string o la data
//3 un callback de error

// fs.writeFile(`tabla del ${data}.txt`,salida,(err)=>{
//   if(err) throw err
//   console.log(`tabla de ${data} creado`)
// })

//video 6
//cuando le pasemos a la terminal un --base = 5
//eso aqui se puede ver con process.argv,que sera un arreglo, en la 1 pos sera la ruta del node
//2 la ruta del app y 3 lo que le pasamos osea --base=5

//video 7 - en pck.json
//npm init -y
//las dependencias son paquetes necesarios para que se ejecute tu aplicacion y el dev es para desarrolo
//es decir cuando estas desarrolando tu aplicacion
//para cambiar de version se hace un npm i algo@1.0.0 - npm update para ver que paquete tiene una actualizacion

//vid 8
//para no hacer los del vis 6 se descarga un paq npm i yargs
//se requiere el args de yargs
// const argv = require("yargs").argv
//en la terminal ejecutar el app con node y le enviamos un --base=5,verlo con el console.log-funciona si no le mandamos el =
//con --help te sale mas info

//vid9
//para darle unas opciones al args que le mande, antes se pone un option
//http://yargs.js.org/docs/#api-reference-optionkey-opt
//los args deben ir de param al ejecutar la funcion
//el el option al poner sus valores , se debe checkear (Verifique que se cumplan ciertas condiciones en los argumentos proporcionados.)
//crear otra option para el yargs donde se agrega una l type bolean,si esta en true que muestre el listado de tabla de multi si no
//que no muestre nada pero si lo que creo

//vid10
//separar la const argv en una carpeta arch - exportarlo de ahi con module y traerlo con require
//cuando le demos en --help, te sale lo que podemos poner- en -b poner una descripcion en option con describe

//video11
//descargar npm i colors - traerlo con el require y cambiar de colores en algunos consolo.log

//video12
//crear otra option de h ,este seria un hasta es decir un limite para la tabla de multiplicacion
//habia un problema al guardar em txt.ya que cuando le ponimaos color con el paquete npm i colors este se enviaba al archivo txt
//pero solo queremos que salga el codigo de colores en la consola y no cuando creamos el archivo
//para eso se crea dos let

//vid13
//debemos guardar la tabla en una carpeta,para eso se ale añade en el 1 param de writesync
//crear un arch gitignore e ignorar los modules y los archivos dentros de salida(salida debe estar activo ya que lo pusimos dentro del
// 1 param de write y debe estar creada) - añadir un markdown a la carp salida,añadiendo un comentario
//iniciarlo con un git init - git add . - git commit -m "xd" - si se borra algo se recupera con git checkout -- .

//vid 14
//agregarlo al github
//añadido ahi,crearle un README.md aqui y añadirle un node --help con la info , push