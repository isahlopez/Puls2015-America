var $form = $('#formulario');
var	$titulo = $('#titulo');
var	$url = $('#url');
var	$publicar= $('#mostrarForm');
var	$list = $('#contenido');
var	$post = $('.item').first();

function mostrarFormulario()
{
	$form.slideToggle(); /*Oculta y muestra el formulario*/
	$(':input:visible:enabled:first').focus(); //Posiciona el cursor en el primer elemento
	return false;
}	
function agregarPost()
{
	var url = $url.val(),
		titulo = $titulo.val(),
		$clone = $post.clone();

	$clone.find('.titulo_item a')
		.text(titulo)
		.attr('href', url);
	$clone.hide();
	$list.prepend($clone); //Embeber el clon de primero
	$clone.fadeIn();
	$titulo.val('');
	$url.val('');
	$(':input:visible:enabled:first').focus();

	return false;
}
	//Eventos
$publicar.click(mostrarFormulario);
$form.on('submit', agregarPost);