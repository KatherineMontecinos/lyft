// Funcion del menu desplegable 	
$(document).ready(main);
 
var contador = 1;
 
function main(){
	$('.menu_bar').click(function(){
		// $('nav').toggle(); 
 
		if(contador == 1){
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
 
	});
 
};

$(document).ready(function(){
		$(".bt-menu").on( "click", function() {
			$('nav').show();
		 });
		$("img").on( "click", function() {
			$('nav').hide('.bt-menu');

		});
	});



var nombre = localStorage.getItem('nombre_user');
$('#name').html(nombre);