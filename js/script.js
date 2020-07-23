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
	$('.submenu__text').on("click","a", function (event) {
		$('.menu, .burger__menu, .submenu, .subgallery, .subcontacts, .burger-container').removeClass('active');
	});
	$("#menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
});