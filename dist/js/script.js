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
		autoplaySpeed: 2000/* ,
		responsive: [
			{
				breakpoint: 1230,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					dots: false,
					arrows: false
				}
			}
		] */
	});

	$('.carousel2__content').slick({
		autoplay: true,
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
				breakpoint: 1230,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 830,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	// Booking Form Tabs

	$('.booking-form__tabs-item').on('click', function () {
		$(this)
			.addClass('booking-form__tabs-item_active').siblings().removeClass('booking-form__tabs-item_active')
			.closest('div.container').find('div.booking-form__content').removeClass('booking-form__content_active').eq($(this).index()).addClass('booking-form__content_active');
	});


	/* 	$('.booking-form__tabs-item').on('click', function () {
			alert('123');
		});
	 */

});  