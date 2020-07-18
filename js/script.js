$(document).ready(function() {
	$('.slider').slick({
		arrows:true,
		dots:true,
		adaptiveHeight: true,
		slidesToShow:1,
		autoplay:false,
		speed:1000,
		autoplaySpeed:800,
		centerMode: true,
		variableWidth: true,
	});
	$('.menu').click(function(event) {
		$('.menu, .burger__menu, .submenu, .subgallery, .subcontacts, .burger-container').toggleClass('active');
	});
});