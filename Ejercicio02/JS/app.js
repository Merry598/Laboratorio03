
$( document ).ajaxStart(function() {
    $( "#loading" ).show();
  });

  $( document ).ajaxStart(function() {
    $( ".log" ).text( "Controladro AJAX Activado." );
  });

  $( ".trigger" ).click(function() {
    $( ".result" ).load( "/Ejercicio02/JS/archivo.txt");
  });
