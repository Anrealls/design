jQuery(function ($) { "use strict";
	
	window.onload = function () {
		document.getElementById('preloader').style.display = 'none';
	}


	$("#post-thumb, #gallery-post").slick({
		infinite: true,
		arrows:false,
		autoplay: true,
  		autoplaySpeed: 4000
		
	});
	
	$("#features").slick({
		infinite: true,
		arrows:false,
		autoplay: true,
  		autoplaySpeed: 4000
	});


	$("#navigation").sticky({
		topSpacing : 0
	});

	$('.image-popup').magnificPopup({
    type: 'image',
    removalDelay: 160, //delay removal by X to allow out-animation
    callbacks: {
        beforeOpen: function () {
            // just a hack that adds mfp-anim class to markup
            this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
            this.st.mainClass = this.st.el.attr('data-effect');
        }
    },
    closeOnContentClick: true,
    midClick: true,
    fixedContentPos: false,
    fixedBgPos: true
});


  	var mixer = mixitup('.portfolio-items-wrapper');

 

	$("#testimonials").slick({
		infinite: true,
		arrows:false,
		autoplay: true,
  		autoplaySpeed: 4000
	});





	$('#contact-submit').click(function (e) {

		e.preventDefault();


		var error = false;
		var name = $('#name').val();
		var email = $('#email').val();
		var subject = $('#subject').val();
		var message = $('#message').val();

		if (name.length == 0) {
			var error = true;
			$('#name').css("border-color", "#D8000C");
		} else {
			$('#name').css("border-color", "#666");
		}
		if (email.length == 0 || email.indexOf('@') == '-1') {
			var error = true;
			$('#email').css("border-color", "#D8000C");
		} else {
			$('#email').css("border-color", "#666");
		}
		if (subject.length == 0) {
			var error = true;
			$('#subject').css("border-color", "#D8000C");
		} else {
			$('#subject').css("border-color", "#666");
		}
		if (message.length == 0) {
			var error = true;
			$('#message').css("border-color", "#D8000C");
		} else {
			$('#message').css("border-color", "#666");
		}

		if (error == false) {

			$('#contact-submit').attr({
				'disabled': 'false',
				'value': 'Sending...'
			});

			$.post("sendmail.php", $("#contact-form").serialize(), function (result) {
				if (result == 'sent') {
					$('#cf-submit').remove();
					$('#mail-success').fadeIn(500);
				} else {
					$('#mail-fail').fadeIn(500);
					$('#contact-submit').removeAttr('disabled').attr('value', 'Send The Message');
				}
			});
		}
	});

});

	var wow = new WOW(
		{
		  offset:       100,
		  mobile:       false
		}
	 );
	 wow.init();

	var scroll = new SmoothScroll('a[href*="#"]');


