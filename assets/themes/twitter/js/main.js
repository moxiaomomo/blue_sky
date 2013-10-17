jQuery.noConflict();
jQuery(document).ready(function(){
	jQuery("#toTop").hide(); 
	
	jQuery( "#toTop a:first").click( function () {
        	jQuery( "html,body").animate({ "scrollTop" : 0 }, 200);
        });
	
	var windowHeight = parseInt(jQuery("body").css("height" ));
		jQuery( "#toTop a:last").click(function () {
		jQuery( "html,body").animate({ "scrollTop" : windowHeight }, 200);
	});

	jQuery(window).scroll(function() {
		jQuery(this).scrollTop() > 200 ? jQuery("#toTop").fadeIn() : jQuery("#toTop").fadeOut()
	});
	
	jQuery('div.row a').attr('target', '_blank');

	jQuery("#search-form").submit(function(){
		var query = document.getElementById("google-search").value;
		window.open("http://google.com/search?q=" + query+ "%20site:" + "http://blog.javachen.com");
	});
});

