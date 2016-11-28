$('#paises a').on('click', function(e){
	// recupero el nombre del pais pulsado
	var paisClick = $(this).find('span').html();

	// lo guardo en localStorage
	window.localStorage.setItem('nombrePais', paisClick);
});