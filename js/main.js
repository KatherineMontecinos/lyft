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