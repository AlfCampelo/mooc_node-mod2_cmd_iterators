//-------------------DECLARACIÓN DE FUNCIONES--------------------------------

//Busca el parametro -r, y si existe borra el valor a continuación y todos los que son iguales 
function buscarR(){
//busca mientras exista "-r" en el array
	while(parametros.find(elem => elem === "-r")){
		//si existe el parametro -r inicializa la variable con el indice
		let indiceR = parametros.findIndex(elem => elem === "-r");
		//inicializa la variable con el parametro a continuacion de -r
		let paramDel = parametros[indiceR + 1];
		//elimina el parametro -r del array
		parametros.splice(indiceR, 1);

		//recorre el array buscando el parametro a eliminar
		for(let i = 0; i < parametros.length; i++){
			if(parametros[i] === paramDel){
				parametros.splice(i, 1);
				--i;
			}
		}
	}
}

//recorre el array contando el número de parametros iguales
// y mostrandolos en pantalla
function reducir(){	
	let cont = 1;//inicializa contador de parametros	 
	parametros.reduce((acc, actual, i, a) => 
		{	//compara el valor actual con el anterior
			//si son iguales incrementa el contador.
			if(actual === a[i-1]){			 	
				cont++;
			//si no son iguales muestra el parametro y el nº de veces contenido en el array
			// e inicializa el contador.
			}else{
				console.log(`${a[i-1]}: ${cont}`);
				cont = 1;
			}
			//si es el último valor lo muestra en pantalla
			if(i === a.length - 1){
				console.log(`${actual}: ${cont}`);
			}
		});
}

//----------------------FIN DECLARACIÓN DE FUNCIONES---------------------------------


//Linea en blanco
console.log();

//declaración y multiasignación de variables
let [rutaNode, rutaFichero, parametros] = [process.argv[0], process.argv[1], process.argv.slice(2)];

//imprime en pantalla ruta a node.js 
console.log(`Route to node.js: ${rutaNode}`); 

//imprime en pantalla ruta al fichero
console.log(`Route to this file: ${rutaFichero}`);

//Linea en blanco
console.log();

//Busca el parametro -r
buscarR();

//ordena el array
parametros.sort();

//cuenta el número de parametros iguales y los muestra
//en pantalla
reducir();
