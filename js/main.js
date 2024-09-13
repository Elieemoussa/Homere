

'use strict';

$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
    // Delay the preloader fadeout and fade out loader
    $("#preloder").delay(400).fadeOut("slow", function() {
        $(".loader").fadeOut();

        // After loader fades out, slowly change body opacity
        $("#bodycontent").css("opacity", "1"); // Trigger fade-in on body
    });

	/*------------------
		Masonry
	--------------------*/
	var $container = $('.gallery-warp');
		$container.imagesLoaded().progress( function() {
			$container.isotope({
				masonry: {
					columnWidth: '.grid-sizer',
  					itemSelector: '.gallery-item'
				}
			});
		});

	$('.gallery-filter li').on("click", function(){
		$(".gallery-filter li").removeClass("active");
		$(this).addClass("active");
		var selector = $(this).attr('data-filter');
		$container.imagesLoaded().progress( function() {
			$container.isotope({
				filter: selector,
			});
		});
		return false;
	});

	var $blog_grid = $('.blog-grid-warp');

	$blog_grid.imagesLoaded().progress( function() {
		$blog_grid.isotope({
			masonry: {
				columnWidth: '.blog-grid-sizer',
				itemSelector: '.blog-grid'
			}
		});
	});

});


/*------------------
    Fallback Timer
--------------------*/
$(document).ready(function() {
    var fallbackTime = 5000; // Set the fallback time in milliseconds (e.g., 5000ms = 5 seconds)
    setTimeout(function() {
        if ($("#preloder").is(":visible")) {
            $("#preloder").fadeOut("slow");
        }
    }, fallbackTime);
});



(function($) {
	/*------------------
		Navigation
	--------------------*/
	$(".menu-switch").on('click', function () {
		$('.side-menu-wrapper').addClass('active');
		$('.menu-wrapper').addClass('hide-left');
	});

	$(".menu-close").on('click', function () {
		$('.side-menu-wrapper').removeClass('active');
		$('.menu-wrapper').removeClass('hide-left');
	});



	function hero() {

		var window_w = $(window).innerWidth();
		
		if(window_w > 1300) {
			var pana_w = 180;
		} else if( window_w > 1200 ) {
			var pana_w = 100;
		} else {
			var pana_w = 60;
		}

		var hero_w = $('.hero-section').innerWidth();
		var pa_length = (($('.pana-accordion-item').length - 1) * pana_w);
		var hero_iw = hero_w - pa_length;

		var window_h = $(window).innerHeight();
		$('.pana-accordion-item').each(function() {
			$(this).height(window_h);
		});
		accordion.init({
			id: 'accordion',
			expandWidth: hero_iw,
			itemWidth: pana_w,
			autoPlay: false,
			borderWidth: 0
		});
		
	}
	
	hero();

	$(window).resize(function(){
		if($('.hero-section').length > 0) {
			if($(window).innerWidth() > 767) {
				location.reload();
			}
		}
	});

	if($(window).innerWidth() > 768) {

		$(".nice-scroll").niceScroll({
			cursorborder:"",
			cursorcolor:"#ffffff",
			boxzoom:false,
			cursorwidth: 13,
			autohidemode:false,
			background: 'rgba(0, 0, 0, 0.3)',
			cursorborderradius:50,
			horizrailenabled: false
		});

		$(".about-section, .blog-details").niceScroll({
			cursorborder:"1px solid rgba(120, 120, 120, 0.9)",
			cursorcolor:"rgba(120, 120, 120, 0.9)",
			boxzoom:false,
			cursorwidth: 13,
			autohidemode:false,
			background: 'rgba(0, 0, 0, 0.1)',
			cursorborderradius:50,
		});

	}
	

	/*------------------
		Background Set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});




	/*------------------
		Hero Slider
	--------------------*/
	$('.hero-slider').owlCarousel({
		loop: true,
		nav: false,
		dots: false,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		items: 1,
		autoplay: true,
		smartSpeed: 1000,
	});

	/*------------------
		Circle progress
	--------------------*/
	$('.circle-progress').each(function() {
		var cpvalue = $(this).data("cpvalue");
		var cpcolor = $(this).data("cpcolor");
		var cpid 	= $(this).data("cpid");

		$(this).append('<div class="'+ cpid +'"></div><div class="progress-info"><h2>'+ cpvalue +'%</h2></div>');

		if (cpvalue < 100) {

			$('.' + cpid).circleProgress({
				value: '0.' + cpvalue,
				size: 100,
				thickness: 5,
				fill: cpcolor,
				emptyFill: "#ebebeb"
			});
		} else {
			$('.' + cpid).circleProgress({
				value: 1,
				size: 100,
				thickness: 5,
				fill: cpcolor,
				emptyFill: "#ebebeb"
			});
		}

	});

})(jQuery);




const element = document.querySelector('.lazyload'); // Adjust the selector as needed
element.classList.add('lazyloading');

// Simulate an image load or event for lazyloading images
setTimeout(() => {
    element.classList.remove('lazyloading');
    element.classList.add('lazyloaded');
}, 1000); // Adjust timing as needed

