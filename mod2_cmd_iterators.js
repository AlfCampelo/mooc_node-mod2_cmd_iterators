//Linea en blanco
console.log();

//declaración y multiasignación de variables
let [rutaNode, rutaFichero, parametros] = [process.argv[0], process.argv[1], process.argv.slice(2)];
//imprime en pantalla ruta a node.js 
console.log("Route to node.js: " + rutaNode); 
//imprime en pantalla ruta al fichero
console.log("Route to this file: " + rutaFichero);


