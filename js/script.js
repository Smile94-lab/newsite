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
		$('.needopen').click(function(event) {
			$('.menu_overlay').toggleClass('open');
			$('body').toggleClass('lock');
	});
	$('.submenu__text').on("click","a", function (event) {
		$('.menu, .burger__menu, .submenu, .subgallery, .subcontacts, .burger-container').removeClass('active');
	});
	$('.menu_overlay').on("click", function (event) {
		$('.menu_overlay').removeClass('open');
		$('body').removeClass('lock');
	});
	$("#menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
});