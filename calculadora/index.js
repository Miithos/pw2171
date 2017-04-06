//Agrega al código (un enlace) al main.js
const rq   = require('electron-require');
const main = rq.remote('./main.js');
var botonesNumeros = ["btn00","btn01","btn02","btn03","btn04","btn05",
					  "btn06","btn07","btn08","btn09"];
var botonesOperador = ["btnSumar","btnRestar","btnMultiplica","btnDividir"];

function numeros(){
	alert(this.id);
	alert(this.value);

}

function operadores(){
	
}
function igual(){
	
}
function borrar(){
	
}
//Asignación de eventos a los botones de número
for(var i=0;i<botonesNumeros.length;i++){
	document.getElementByID(botonesNumeros[i]).addEventListenner('click',numeros);
}

//Asignación de eventos a los botones de operador
for(var i=0;i<botonesOperador.length;i++){
	document.getElementByID(botonesOperador[i]).addEventListenner('click',operadores);
}

//Evento click del botón igual
document.getElementByID("btnIgual").addEventListenner('click',igual);
//Evento click del botón CE
document.getElementByID("btnCE").addEventListenner('click',borrar);