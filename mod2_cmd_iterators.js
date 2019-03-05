//Busca el parametro -r, y si existe borra el valor a continuación y todos los que son iguales 
function buscarR(){
//busca mientras exista "-r" en el array
	while(parametros.find(elem => elem === "-r")){
		//si existe el parametro -r inicializa la variable con el indice
		let indiceR = parametros.findIndex(elem => elem === "-r");
		//inicializa la variable con el parametro a continuacion de -r
		let paramDel = parametros[indiceR + 1];

		console.log("indiceR = " + indiceR);
		console.log("paramDel = " + paramDel);
		console.log();
		//elimina el parametro -r del array
		parametros.splice(indiceR, 1);

		//recorre el array buscando el parametro a eliminar
		for(let i = 0; i < parametros.length; i++){
			console.log("parametros[" + i + "] = " + parametros[i]);
			if(parametros[i] === paramDel){
				console.log("en el if, borra " + parametros[i]);
				parametros.splice(i, 1);
				--i;
			}/**/
		}
	}
}


//Linea en blanco
console.log();

//declaración y multiasignación de variables
let [rutaNode, rutaFichero, parametros] = [process.argv[0], process.argv[1], process.argv.slice(2)];
//imprime en pantalla ruta a node.js 
console.log("Route to node.js: " + rutaNode); 
//imprime en pantalla ruta al fichero
console.log("Route to this file: " + rutaFichero);

parametros.forEach((val, index) => {
	console.log(`${index}: ${val}`);
});/**/

//Linea en blanco
console.log();


buscarR();
//ordena el array
parametros.sort();

parametros.forEach((val, index) => {
	console.log(`${index}: ${val}`);
});