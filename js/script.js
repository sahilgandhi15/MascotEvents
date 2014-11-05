/* Author: Bima Arafah, known as @fgaeg on twitter!

*/



/**
// define your functions, callback, anything below
///////////////////////////////////////////////////////
*/






/**
// initialise plugins when document ready
///////////////////////////////////////////////
*/
jQuery(document).ready(function() {
	
	
	/* preload page
	jQuery("body").queryLoader2({
        barColor: "#6e6d73",
        backgroundColor: "#fff1b0",
        percentage: true,
        barHeight: 30,
        completeAnimation: "grow"
    });
	*/
    
	
	/* superfish for primary menu on top */
	jQuery('ul.primary-nav').superfish({
		dropShadows: false
	});
	
	
	// define function for login panel active on click
	function login_btn_panel() {
	    jQuery(".login-link").click(function() {
			// toggle the class for .login-link
			jQuery(this).toggleClass("highlight");

	        var loginBox = jQuery(".form-login-panel");
	        if (loginBox.is(":visible"))
	            loginBox.fadeOut("fast");
	        else
	            loginBox.fadeIn("fast");
	        return false;			
	    });
	
		jQuery(".form-login-panel").mouseup(function() {
            return false
        });

        jQuery(document).mouseup(function(e) {
            if(jQuery(e.target).parent("a.signin").length==0) {
                jQuery(".login-link").removeClass("highlight");
                jQuery(".form-login-panel").css("display","none");
            }
        });
	
	    jQuery(".form-login-panel").hover(function(){ 
	        mouse_is_inside=true; 
	    }, function(){ 
	        mouse_is_inside=false; 
	    });

	    jQuery("body").click(function(){
	        if(!mouse_is_inside) 
				jQuery(".form-login-panel").fadeOut("fast");
	    });
	}
	
	// fire the login function above
	login_btn_panel();
	
	
	
	
	function headlines() {

		jQuery('#headlines-carousel').carouFredSel({
			responsive: true,
			circular: false,
			auto: false,
			items: {
				visible: 1,
				width: 200
			},
			scroll: {
				fx: 'fade'
			}
		});

		jQuery('#headlines-thumbs').carouFredSel({
			responsive: true,
			circular: false,
			infinite: false,
			auto: false,
			prev: '#prev',
			next: '#next',
			items: {
				visible: {
					min: 2,
					max: 4
				},
				width: 180
			}
		});

		jQuery('#headlines-thumbs a').click(function() {
			$('#headlines-carousel').trigger('slideTo', '#'+this.href.split('#').pop());
			$('#headlines-thumbs a').removeClass('selected');
			$(this).addClass('selected');
			return false;
		});

	}
	headlines();
	
	
	// fire the carousel for widget
	jQuery('.carousel-post').carouFredSel({
		responsive: true,
		circular: false,
		infinite: false,
		auto: false,
		prev: '.carousel-post-prev',
		next: '.carousel-post-next',
		pagination: ".carousel-post-pag",
		items: {
			visible: {
				min: 2,
				max: 4
			},
			width: 180
		}
	});
	
	
	// pulling request flickr feed via JSON method
	function pull_flickr_image_request() {
		// Our very special jQuery JSON fucntion call to Flickr, gets details of the most recent 20 images			   
		jQuery.getJSON("http://api.flickr.com/services/feeds/groups_pool.gne?id=" + flickrid + "&lang=en-us&format=json&jsoncallback=?", displayImages);

		function displayImages(data) {																																   
			// Randomly choose where to start. A random number between 0 and the number of photos we grabbed (20) minus 9 (we are displaying 9 photos).
			var iStart = Math.floor(Math.random()*(11));	

			// Reset our counter to 0
			var iCount = 0;								

			// Start putting together the HTML string
			var htmlString = "<ul>";					

			// Now start cycling through our array of Flickr photo details
			jQuery.each(data.items, function(i,item){

				// Let's only display 9 photos (a 3x3 grid), starting from a random point in the feed					
				if (iCount > iStart && iCount < (iStart + 12)) {

					// I only want the ickle square thumbnails
					var sourceSquare = (item.media.m).replace("_m.jpg", "_s.jpg");		

					// Here's where we piece together the HTML
					htmlString += '<li><a href="' + item.link + '" target="_blank">';
					htmlString += '<img src="' + sourceSquare + '" alt="' + item.title + '" title="' + item.title + '"/>';
					htmlString += '</a></li>';
				}
				// Increase our counter by 1
				iCount++;
			});		

		// Pop our HTML in the #images DIV	
		jQuery('.widget_photos .widget-inner-content').html(htmlString + "</ul>");

		// Close down the JSON function call
		}
	}
	// then fire the function above to execute
	pull_flickr_image_request();

	
	// fire the custom bg image
	// if is set and ready, then call it
	if(custom_bg_image != null) {
		jQuery.supersized({
			transition: 1,
			slides: [ {image : custom_bg_image, title : 'newspaper portal'} ]
		});
	}
	
	
	
	
	// trigger for radio button on search header
	jQuery("#radio-set-search").buttonsetv();
	
	
	// jquery ui tabs for widget
	jQuery(".widget_tabs").tabs({ 
		event: "mouseover",
        fx: { opacity:'toggle', duration: 200 },
        show: function(event, ui) {
                jQuery(this).css('height', 'auto');
        },
        cookie: {
            // cookie for a day, without, it would be a session cookie
            expires: 1
        }
    });
	// for subscribe with ui tabs
	jQuery(".widget_subscribe").tabs({ 
        fx: { opacity:'toggle', duration: 200 },
        show: function(event, ui) {
                jQuery(this).css('height', 'auto');
        },
        cookie: {
            // cookie for a day, without, it would be a session cookie
            expires: 1
        }
    });
	// for tabs related below the content on detail page
	jQuery("#related-articles").tabs({ 
        fx: { opacity:'toggle', duration: 200 },
        show: function(event, ui) {
                jQuery(this).css('height', 'auto');
        },
        cookie: {
            // cookie for a day, without, it would be a session cookie
            expires: 1
        }
    });

	// prevent default for event on each tabs link
    if (jQuery().tabs) {            
        jQuery('.ui-tabs-nav a').click( function (e) {              
            e.preventDefault();                
        });            
    }


	// jtweetsanywhere for widget twitter
	jQuery('.widget-tweets').jTweetsAnywhere({
		// username: 'nukman',
	    searchParams: ['q='+tweet],
	    count: 3,
	    showTweetFeed: {
	    	autoConformToTwitterStyleguide: true,
			expandHovercards: true,
			showSource: true,
	        showTimestamp: {
	            refreshInterval: 15
	        },
	        autorefresh: {
	            mode: 'trigger-insert',
	            interval: 30
	        },
	        paging: { mode: 'none' }
	    },
	    onDataRequestHandler: function(stats, options) {
	        if (stats.dataRequestCount < 11) {
	            return true;
	        } else {
	            stopAutorefresh(options);
	            // alert("To avoid struggling with Twitter's rate limit, we stop loading data after 10 API calls.");
	        }
	    }
	});
    
	
	// sticky breadcrumb
	jQuery("#nav-page").sticky({topSpacing:0,center:true});

	
    // ride the carousel
	jQuery("#news-footer-carousel").carouFredSel({
		responsive: true,
		width: "100%",
		height: "auto",
		scroll: {
			// fx: "directscroll",
			// easing: "linear",
			pauseOnHover: true,
			items: "page"
		},
		auto: {
			play: false
		},
		items: {
			visible: {
				min: 2,
				max: 4
			}
		},
		prev	: {	
			button	: "#news-footer-prev",
			key		: "left"
		},
		next	: { 
			button	: "#news-footer-next",
			key		: "right"
		},
		pagination	: "#news-footer-pag"
	});
	
});



// sticky floated aside info on detail page
/*
jQuery(function () {
	function n() {
        jQuery("article.post .entry-item").each(function () {
            var a = jQuery(this).offset().top - 10,
                b = jQuery(this).outerHeight(),
                d = jQuery(window).scrollTop(),
                p = jQuery(this).find("aside.entry-meta").outerHeight(true),
                q = jQuery(this).find("aside.entry-meta").offset().left;
            if (a - d < 0 && a - d > -b && a - d < 10 + p - b) jQuery(this).find("aside.entry-meta").data("fixed", "false").css({
                position: "absolute",
                // right: "0px",
				width: "auto",
                left: "auto",
                bottom: "10px",
                top: "auto"
            });
            else a - d < 0 && a - d > -b ? jQuery(this).find("aside.entry-meta").data("fixed", "true").css({
                position: "fixed",
                // left: q + "px",
				width: "auto",
                bottom: "auto",
                top: "40px"
            }) : jQuery(this).find("aside.entry-meta").data("fixed", "false").css({
                position: "absolute",
                // right: "0px",
				width: "auto",
                left: "auto",
                bottom: "auto",
                top: "0px"
            });
            if (jQuery(this).find("aside.entry-meta").data("fixed") == "true") {
                a = jQuery(this).offset().left + jQuery(this).find(".entry-content").outerWidth(false) - jQuery(window).scrollLeft();
                jQuery(this).find("aside.entry-meta").css({
                    // left: a + o + "px"
					left: "auto"
                });
                console.log(jQuery(window).scrollLeft() + " and " + a)
            }
        })
    }
	n();
    jQuery(window).scroll(function () {
        n()
    });
    var o = 16;
    jQuery(window).resize(function () {
        jQuery("article.post .entry-item").each(function () {
            if (jQuery(this).find("aside.entry-meta").data("fixed") == "true") {
                var a = jQuery(this).offset().left + jQuery(this).find(".entry-content").outerWidth(false) - jQuery(window).scrollLeft();
                jQuery(this).find("aside.entry-meta").css({
                    // left: a + o + "px"
					left: "auto"
                });
                console.log(jQuery(window).scrollLeft() + " and " + a)
            }
        })
    });
});
*/




/*
 * for support on ios device //
window.addEventListener('DOMContentLoaded',function() {
    $("body").queryLoader2({
        barColor: "#6e6d73",
        backgroundColor: "#fff1b0",
        percentage: true,
        barHeight: 30,
        completeAnimation: "grow"
    });
});
*/



