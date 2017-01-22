jQuery(function(){

	if (jQuery('.img-to-bg').length) {
		jQuery('.img-to-bg').each(function(){
			var self = jQuery(this);
			if (self.find('> img').attr('src')) self.css('background-image', 'url(' + self.find('> img').attr('src') + ')');
			else self.hide();
		});
	}
	
	jQuery('.mobile-menu').on('click', function(){
		jQuery('body').toggleClass('mobile-menu-show');
		return false;
	});
	
	jQuery('.accordion-wrapper ul li h2').on('click', function(){
		jQuery(this).parent().toggleClass('is-active');
		return false;
	});
	
	jQuery('.aside.left .menu .select').on('click', function(){
		jQuery(this).parents('.menu').toggleClass('is-open');
	});
	jQuery('.aside.left .menu li').on('click', function(){
		jQuery(this).addClass('is-active').siblings().removeClass('is-active');
		jQuery(this).parents('.menu').toggleClass('is-open');
	});
	
	jQuery('.table-wrapper').perfectScrollbar();
	
	resize_actions(jQuery('body').width());
	jQuery(window).resize(function(){
		resize_actions(jQuery('body').width());
	});
	
	jQuery('.slider-wrapper ul').slick({
		dots: false,
		arrows: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true,
		responsive: [{
			breakpoint: 1400,
			settings: {
				speed: 300,
				dots: true,
				arrows: false,
				infinite: false,
				slidesToShow: 1
			}
		}]
	});
	
	jQuery('.cards-wrapper.box-slider-1 ul').slick({
		dots: true,
		arrows: false,
		infinite: false,
		slidesToShow: 4,
		responsive: [{
			breakpoint: 1240,
			settings: {
				speed: 300,
				dots: true,
				arrows: false,
				infinite: false,
				slidesToShow: 3
			}
		},{
			breakpoint: 930,
			settings: {
				speed: 300,
				dots: true,
				arrows: false,
				infinite: false,
				slidesToShow: 2
			}
		},{
			breakpoint: 620,
			settings: {
				speed: 300,
				dots: true,
				arrows: false,
				infinite: false,
				slidesToShow: 1
			}
		}]
	});
	
	jQuery('.cards-wrapper.box-slider-3 ul').slick({
		dots: true,
		arrows: false,
		infinite: false,
		slidesToShow: 3,
		responsive: [{
			breakpoint: 930,
			settings: {
				speed: 300,
				dots: true,
				arrows: false,
				infinite: false,
				slidesToShow: 2
			}
		},{
			breakpoint: 620,
			settings: {
				speed: 300,
				dots: true,
				arrows: false,
				infinite: false,
				slidesToShow: 1
			}
		}]
	});
	
	function resize_actions(width){
		
		var aside_left_height = jQuery('.aside.left').length ? jQuery('.aside.left').outerHeight() : 0;
		
		jQuery('.table-wrapper').perfectScrollbar('update');
		
		if (width <= 620) {
			
			if (!jQuery('.cards-wrapper.box-slider-2 .slider').hasClass('slick-initialized')) {
				jQuery('.cards-wrapper.box-slider-2').removeClass('for-desktop');
				jQuery('.cards-wrapper.box-slider-2 .slider').slick({
					speed: 300,
					dots: true,
					arrows: false,
					infinite: false,
					slidesToShow: 1,
					adaptiveHeight: true
				});
			}
		} if (width <= 1100) {
			
			jQuery('.content-wrapper').css('min-height', 0);
			
		} else {
			
			if (aside_left_height) {
				jQuery('.content-wrapper').css('min-height', aside_left_height);
			}
			
			if (jQuery('.cards-wrapper.box-slider-2 .slider').hasClass('slick-initialized')) {
				jQuery('.cards-wrapper.box-slider-2').addClass('for-desktop');
				jQuery('.cards-wrapper.box-slider-2 .slider').slick('unslick');
			}
		}
		
	}
});