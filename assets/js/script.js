// var images = document.querySelectorAll('img');
try {
	var images = document.getElementsByClassName('parallax');
	new simpleParallax(images, {
	  overflow: true,
	  orientation: 'right'
	});
} catch {}
	
(function($) {
  $(document).scroll(function () {
    var $nav = $('.navbar.main');
    $nav.toggleClass('bg-dark', $(this).scrollTop() > $nav.height());
  });
})(jQuery);

$(document).ready(function () {
	$('.nav-link').on('click',function(){
		$('.navbar-toggler').addClass('collapsed');
		$('#navbarSupportedContent').removeClass('show');
	});
});