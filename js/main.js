/* ----------------------------------------------------------- */
	/*  Fixed header
	/* ----------------------------------------------------------- */


		// fixedHeader on scroll
	  // Smooth scroll for the navigation menu and links with .scrollto classes
      $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          e.preventDefault();
          var target = $(this.hash);
          if (target.length) {
    
            var scrollto = target.offset().top;
    
            $('html, body').animate({
              scrollTop: scrollto
            }, 1500, 'easeInOutExpo');
    
            if ($(this).parents('.nav-menu, .mobile-nav').length) {
              $('.nav-menu .active, .mobile-nav .active').removeClass('active');
              $(this).closest('li').addClass('active');
            }
    
            if ($('body').hasClass('mobile-nav-active')) {
              $('body').removeClass('mobile-nav-active');
              $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
              $('.mobile-nav-overly').fadeOut();
            }
            return false;
          }
        }
      });
    
      // Mobile Navigation
      if ($('.nav-menu').length) {
        var $mobile_nav = $('.nav-menu').clone().prop({
          class: 'mobile-nav d-lg-none'
        });
        $('body').append($mobile_nav);
        $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
        $('body').append('<div class="mobile-nav-overly"></div>');
    
        $(document).on('click', '.mobile-nav-toggle', function(e) {
          $('body').toggleClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').toggle();
        });
    
        $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
          e.preventDefault();
          $(this).next().slideToggle(300);
          $(this).parent().toggleClass('active');
        });
    
        $(document).click(function(e) {
          var container = $(".mobile-nav, .mobile-nav-toggle");
          if (!container.is(e.target) && container.has(e.target).length === 0) {
            if ($('body').hasClass('mobile-nav-active')) {
              $('body').removeClass('mobile-nav-active');
              $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
              $('.mobile-nav-overly').fadeOut();
            }
          }
        });
      } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
        $(".mobile-nav, .mobile-nav-toggle").hide();
      }
      
    // stikcy js
    $("#header").sticky({
      topSpacing: 0
  });



$('.theme-carousel').owlCarousel({
  loop:true,
    center:true,
    margin:30,
    autoplay:true,
    responsiveClass:true,
    nav: false,
    responsive:{
      0: {
        items: 1
      },
      680: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });
  
  $(document).on('click', '.owl-item>div', function(){
    var $speed = 1000;
    $owl.trigger('to.owl.carousel',[$(this).data('position'), $speed]);
  });

   // :: CounterUp Active Code
 // Facts counter
 $('[data-toggle="counter-up"]').counterUp({
  delay: 10,
  time: 2000
});

$('.set-bg').each(function () {
  var bg = $(this).data('setbg');
  $(this).css('background-image', 'url(' + bg + ')');
});


	/*-------------------------------------------------------------------------------
    Testimonial Slider 
	-------------------------------------------------------------------------------*/
	$('.active_testimonial').owlCarousel({
		items: 1,
		loop: true,
		dots: false,
		autoplay: false,
		nav: true,
		navText: [ "<img src='img/cprev.png'>", "<img src='img/cnext.png'>" ]
	});


  