var i = 0;
var splitCadena;

function imprimirCadena(){
	var cadena = document.getElementById('my_text').value;
	var velocidad = document.getElementById('my_speed').value;
	//Division de cadena
	splitCadena = cadena.split(" "); 
	console.log("char total: " + splitCadena);
	//Total de palabras
	var wordsTotal = splitCadena.length;
	document.getElementById('words').innerHTML="Total de Palabras: "+wordsTotal+" Su texto se desplegara en consola (F12 para abrirla)";


	for (i = 0;i<wordsTotal;i++)
	{
		setTimeout(function() {
			console.log('%c ' + splitCadena.join(),'color:red');
		}, (velocidad*1000));	
	}
}