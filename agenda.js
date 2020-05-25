var i = 0;

var contactoNombre = [];
var contactoNumero = [];
var contactoCorreo = [];
var contactoDirecc = [];

var contactos = [];

function nuevoContacto(){
	contactoNombre[i] = prompt("Nombre:");
	contactoNumero[i] = prompt("telefono:");
	contactoCorreo[i] = prompt("Correo:");
	contactoDirecc[i] = prompt("direccion");

	contactos[i] = contactoNombre[i] + " " 
	+ " " + contactoNumero[i] + " " + contactoCorreo[i]
	+ " " + contactoDirecc[i];

	return  i = i + 1;
}

function verContactos(){
	document.getElementById('contactos').innerHTML = ("CONTACTOS:"+"<br />");
	for (var i = contactos.length - 1; i >= 0; i--) {
		document.getElementById('contactos').innerHTML += (contactos[i]+"<br />");
	}
}

function verContacto(nombre){
	var buscarNom = prompt("Ingrese el nombre a buscar:");
	var results=0;
	document.getElementById('contactos').innerHTML = ("CONTACTOS:"+"<br />");
	for (var i = contactos.length - 1; i >= 0; i--) {
		if(buscarNom==contactoNombre[i]){
			document.getElementById('contactos').innerHTML += (contactos[i]+" '<br />'");
			results++;
		}
	}
	if(results==0)
		document.getElementById('contactos').innerHTML += (" 'No hay contactos con ese nombre...'");
}

function menu(){
	var menu = prompt("Keyboard Menu: \n 1.Agregar contacto \n 2.Ver Contactos \n 3.Buscar Contactos \n ");
	switch(menu){
		case '1':
		nuevoContacto();
		break;

		case '2':
		verContactos();
		break;

		case '3':
		verContacto()
		break;

		default:
		document.getElementById('contactos').innerHTML = ("Ha introducido una opcion invalida, por favor intentelo de nuevo");
		break

	}


}