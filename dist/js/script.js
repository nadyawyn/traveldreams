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


});  