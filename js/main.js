//function validarCodigo() {
	// rescatar el valor del input
	//var inputCodigo = $("#codigo").val();


    // crear una función 

$(function() {
  $('#codeselector').change(function(){
    $('.code').hide();
    $('#' + $(this).val()).show();
  });
});


/*var carpetas = $("#renombra");
$('option', carpetas).remove();

for(var i=0; i<res.length; i++)
{
var img = getimg(res[i]);
var ruta = "img/"+img+"";

carpetas.append('<option style="background:url('+ruta+') no-repeat center left; padding-left:20px;" value='+ruta+res[i]+' >'+res[i]+'</option>');
}*/