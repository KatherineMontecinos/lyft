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
		prefijo: "+569",
		bandera: "img/chile.png"
	},
	{
		nombre: "Mexico",
		prefijo: "+529",
		bandera: "img/mexico.png"
	},
	{
		nombre: "Peru",
		prefijo: "+519",
		bandera: "img/peru.png"
	},
	{
		nombre: "Estados Unidos",
		prefijo: "+1",
		bandera: "img/eeuu.png"
	},
	{
		nombre: "Argentina",
		prefijo: "+549",
		bandera: "img/argentina.png"
	},
];

// traer el nombre del pais desde localStorage
var nombre_pais = window.localStorage.getItem("nombre_pais") || "Chile";

// recuperar el objeto pais, desde el arreglo de paises
var pais = {};
for (var i=0 ; i<paises.length ; ++i){
	if (paises[i].nombre == nombre_pais) {
		pais = paises[i];
		break;
	}
}
// Modificar el DOM
$('#pais img').attr('src', pais.bandera);
$('#prefijo').html(pais.prefijo);

