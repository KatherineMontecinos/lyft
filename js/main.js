//function validarCodigo() {
	// rescatar el valor del input

/*$(function() {
  $('#codeselector').change(function(){
    $('.code').hide();
    $('#' + $(this).val()).show();
  });
});*/

var paises = [
	{
		nombre: "Chile",
		codigo: "+569",
		bandera: "img/chile.png"
	},
	{
		nombre: "Mexico",
		codigo: "+529",
		bandera: "img/mexico.png"
	},
	{
		nombre: "Peru",
		codigo: "+519",
		bandera: "img/peru.png"
	},
	{
		nombre: "Estados Unidos",
		codigo: "+1",
		bandera: "img/eeuu.png"
	},
	{
		nombre: "Argentina",
		codigo: "+549",
		bandera: "img/argentina.png"
	},
];

// traer el nombre del pais desde localStorage
var nombrePais = window.localStorage.getItem("nombrePais") || "Chile";

// recuperar el objeto pais, desde el arreglo de paises
var pais = {};
for (var i=0 ; i<paises.length ; ++i){
	if (paises[i].nombre == nombrePais) {
		pais = paises[i];
		break;
	}
}
// Modificar el DOM
$('#pais img').attr('src', pais.bandera);
$('#codigo').html(pais.codigo);


//Funcion que solo valida numeros 
 /* $(document).ready(function (){
    $('#numeros').keyup(function (){
    	this.value = (this.value + '').replace(/[^0-9]/g, '');
    });
   });
*/



$(document).ready(function(){
	$('#nextbtn').click(function(){
		if ($('#numeros').val().length != 9 || isNaN($('#numeros').val())) {
			alert('Debe ser un número de 9 digitos');
			return false;
		}

 	});
})

	/*$('#nextbtn').on('click', function(){
		var btnnext = $('#numeros').val(){
			if (btnnext.length != 9){
			alert('Numero debe ser de 9 digitos');
		}
		if (isNaN(btnnext)){
			alert('Debe contener numeros');
		}
		
	});*/



