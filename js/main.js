
$(".navbar .navbar-header ul li").hover(function() 
  {
      $(this).children(".sub_menu").stop(true,false).slideToggle(500);
  }, function() {
      $(this).children(".sub_menu").stop(true,false).slideToggle(500);
  });

$( '.hamburger_icon' ).click(function() {
  $( "#toggle" ).toggle( "slide" );
  return false;
});
$( '.side-nav-wrapper #logo i' ).click(function() {
  $( "#toggle" ).toggle( "slide" );
  return true;
});
