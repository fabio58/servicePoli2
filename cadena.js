var express = require('express');
var express = require('cadena');
var app = express();

app.get('/cadena/:nombre',function(request, response){
if(esPalindromo(request.params.nombre)){
		response.send('Es un palíndromo  '+ request.params.nombre);
}else{
	response.send('NO ES palíndromo  '+ request.params.nombre);
}

});

function esPalindromo( cadena ){
	t = cadena.length;	
	/*Faltan validaciones ... */	
	/*si la cadena esta vacia no es palindromo*/
	if(t == 0){
		return false;
	}	
	for(i=0;i<t/2;i++){
		if(cadena[i] != cadena[t-1-i]){
			return false;
		}
	}
	return true;
}


app.listen(3000);