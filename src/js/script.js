$(document).ready(function () {
	$('.carousel__content').slick({
		autoplay: false,
		infinite: true,
		dots: true,
		arrows: false,
		speed: 1800,
		slidesToShow: 3,
		slidesToScroll: 2,
		adaptiveHeight: false,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					dots: false,
					arrows: false
				}
			}
		]
	});

	$('.carousel2__content').slick({
		autoplay: false,
		infinite: true,
		dots: true,
		arrows: false,
		speed: 1800,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: false,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					dots: false,
					arrows: false
				}
			}
		]
	});

	$('.carousel3__content').slick({
		autoplay: false,
		infinite: false,
		dots: true,
		arrows: false,
		speed: 1800,
		slidesToShow: 3,
		slidesToScroll: 2,
		adaptiveHeight: false,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					dots: false,
					arrows: false
				}
			}
		]
	});


});  