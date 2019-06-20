/***************** Waypoints ******************/

$(document).ready(function() {

	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated fadeInLeft');
	}, {
		offset: '75%'
	});
	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeInDown');
	}, {
		offset: '55%'
	});
	$('.wp4').waypoint(function() {
		$('.wp4').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});
	$('.wp5').waypoint(function() {
		$('.wp5').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp6').waypoint(function() {
		$('.wp6').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});
	$('.wp7').waypoint(function() {
		$('.wp7').addClass('animated fadeInDown slow');
	}, {
		offset: '100%'
	});
	$('.wp8').waypoint(function() {
		$('.wp8').addClass('animated fadeInUp slow');
	}, {
		offset: '110%'
	});
	$('.wp6').waypoint(function() {
		$('.wp6').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});
	$('.wp6').waypoint(function() {
		$('.wp6').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});

});

/***************** Slide-In Nav ******************/

$(window).load(function() {

	$('.nav_slide_button').click(function() {
		$('.pull').slideToggle();
	});

});

/***************** Smooth Scrolling ******************/

$(function() {

	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 2000);
				return false;
			}
		}
	});

});

/***************** Nav Transformicon ******************/


/***************** Overlays ******************/

$(document).ready(function(){
    if (Modernizr.touch) {
        // show the close overlay button
        $(".close-overlay").removeClass("hidden");
        // handle the adding of hover class when clicked
        $(".img").click(function(e){
            if (!$(this).hasClass("hover")) {
                $(this).addClass("hover");
            }
        });
        // handle the closing of the overlay
        $(".close-overlay").click(function(e){
            e.preventDefault();
            e.stopPropagation();
            if ($(this).closest(".img").hasClass("hover")) {
                $(this).closest(".img").removeClass("hover");
            }
        });
    } else {
        // handle the mouseenter functionality
        $(".img").mouseenter(function(){
            $(this).addClass("hover");
        })
        // handle the mouseleave functionality
        .mouseleave(function(){
            $(this).removeClass("hover");
        });
    }
});

/***************** Flexsliders ******************/

$(window).load(function() {

	$('#portfolioSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: false,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});

	$('#servicesSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: true,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});

	$('#teamSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: true,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});

});
//TODO greenshock (pas touche ramy)
// ! PAS TOUCHE 
$(window).load(function() {
	TweenMax.to('.motto', 3, {
		color: '#3c8874',
		fontWeight:'bold',
	})
	TweenMax.to('.store-is-coming', 0.5,  {display: 'none'});
	TweenMax.to('.close', 0.5,  {display: 'none'});
	TweenMax.to('.link', 0, {display:'none', opacity:0});
	TweenMax.to('.link1', 0, {display:'none', opacity:0});
	TweenMax.to('.link2', 0, {display:'none', opacity:0});
	TweenMax.to('.link3', 0, {display:'none', opacity:0});
	TweenMax.to('.first_letter', 1.25, {y:-2000, opacity:1});
	TweenMax.to('.s_letter', 0.5, {opacity:1});
	TweenMax.to('.t_letter', 0.75, {opacity:1});
	TweenMax.to('.f_letter', 1, {opacity:1});
	TweenMax.to('.five_letter', 1.25, {opacity:1});
	TweenMax.to('.six_letter', 1.5, {opacity:1});
	TweenMax.to('.seven_letter', 1.75, {opacity:1});
	TweenMax.to('.e_letter', 2, {opacity:1});
	TweenMax.to('.n_letter', 2.25, {opacity:1});
	TweenMax.to('.t_letter', 2.5, {opacity:1});
	var tl = new TimelineLite({paused:true});
	// ! J'AI DIS PAS TOUCHE 
	$('.arrow-right-1').on('click', function(event) {
		TweenMax.to('.section', 1,  {x: '-100vw'});
		event.preventDefault();
		tl.play();
	});
	$('.arrow-right-2').on('click', function(event) {
		TweenMax.to('.section', 1,  {x: '-200vw'});
		event.preventDefault();
		tl.play();
	});
	$('.arrow-left-1').on('click', function(event) {
		TweenMax.to('.section', 1,  {x: '0'});
		event.preventDefault();
		tl.play();
	});
	$('.arrow-left-2').on('click', function(event) {
		TweenMax.to('.section', 1,  {x: '-100vw'});
		event.preventDefault();
		tl.play();
	});
	$('.link').on('click', function(event) {
		TweenMax.to('.section', 1,  {x: '00vw'});
		event.preventDefault();
		tl.play();
	});
	$('.link1').on('click', function(event) {
		TweenMax.to('.section', 1,  {x: '-100vw'});
		event.preventDefault();
		tl.play();
	});
	$('.link2').on('click', function(event) {
		TweenMax.to('.section', 1,  {x: '-200vw'});
		event.preventDefault();
		tl.play();
	});
	$('.arrow-left-3').on('click', function(event) {
		TweenMax.to('.section', 1,  {x: '0vw'});
		event.preventDefault();
		tl.play();
	});
	$('.close').on('click', function(event) {
		TweenMax.to('.navbar', 0.25,  {width: '80px'});
		TweenMax.to('.expand', 0.25,  {opacity: 1});
		TweenMax.to('.close', 0,  {display: 'none'});
		TweenMax.to('.store-is-coming', 0.01,  {display: 'none'});
		TweenMax.to('.link', 0, {display:'none', opacity:0});
		TweenMax.to('.link1', 0, {display:'none', opacity:0});
		TweenMax.to('.link2', 0, {display:'none', opacity:0});
		TweenMax.to('.link3', 0, {display:'none', opacity:0});
		event.preventDefault();
		tl.play();
	});
	$('.expand').on('click', function(event) {
		TweenMax.to('.navbar', 0.25,  {width: '20vw'});
		TweenMax.to('.expand', 0.25,  {opacity: 0});
		TweenMax.to('.close', 0.5,  {display: 'block'});
		TweenMax.to('.store-is-coming', 0.01,  {display: 'block'});
		TweenMax.to('.link', 0.5, {display:'block', opacity:1, fontSize:20});
		TweenMax.to('.link1', 1, {display:'block', opacity:1, fontSize:20});
		TweenMax.to('.link2', 1.5, {display:'block', opacity:1, fontSize:20});
		TweenMax.to('.link3', 2, {display:'block', opacity:1, fontSize:20});
		event.preventDefault();
		tl.play();
	});

	$('.title').mouseover(function (e){    
		TweenMax.to($(this), .2, {opacity:0.9});
});
})