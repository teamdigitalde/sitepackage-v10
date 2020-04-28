var bodywidth = document.body.clientWidth;
window.onresize = function(event) {
    bodywidth = document.body.clientWidth;
};
jQuery(document).ready(function() {
    jQuery('.drilldown').drilldown();
});
jQuery('span.nav-link').click(function(e) {
    e.preventDefault();
    window.location.assign(jQuery(this).attr('href'));
});
/* Geschmeitigeres Scrollen von Anchorlinks */
/*
jQuery('a[href*=#]').on('click', function(event){
    var hash = jQuery(this.hash)['selector'];
    if(jQuery(hash).length == 1) {
        event.preventDefault();
        if(!jQuery(this).hasClass('carousel-control-next') && !jQuery(this).hasClass('carousel-control-prev')) {
            jQuery('html,body').animate({scrollTop:jQuery(this.hash).offset().top}, 500);
        }
    }
});
*/

jQuery(document).ready(function() {
	if(bodywidth <= 1100) {
        var regex= /(\+[0-9]+)?\ ?(\(\d\))?\ ?(\d{1,})\ ?\/?\ ?(\d{1,})\ ?\-?\ ?(\d{1,})\ ?\-?\ ?(\d{1,})/g;

        jQuery('p,li').each(function() {
            var text = $(this).html();

            text = text.replace(regex, "<a href=\'tel:$1\$3\$4\$5\'>$&</a>");
            $(this).html(text);
        });
	}
});

// Accordion Pfeile hoch / runter
$(".accordion-toggle").addClass("collapsed");
$('.collapse').on('shown.bs.collapse', function(){
	$(this).parent().find(".accordion-toggle").removeClass("collapsed");
}).on('hidden.bs.collapse', function(){
	$(this).parent().find(".accordion-toggle").addClass("collapsed");
});

//Schließt offenes Accordion bei Öffnung eines anderen Accordions
//jQuery('.panel-heading').click( function(e) {
//    jQuery('.collapse').collapse('hide');
//});

// Beim öffnen das Accordions, wird das Accordion nach oben gescrollt.
jQuery('.card-header').click(function() {
    if(jQuery(this).hasClass('open')) {
        jQuery(this).removeClass('open');
    } else {
        jQuery(this).addClass('open');
        $('html,body').animate({
            scrollTop: $(this).offset().top - jQuery('.page-header').height()
        }, 500);
    }
});

// tel: usw. auf dem Desktop nicht verlinken
$('a[href^="tel:"], a[href^="fax:"], a[href^="sms:"]').click(function() {
    if (navigator.userAgent.search(/(Android|iPhone|Windows Phone|Blackberry)/i) == -1) {
        return false;
                }});

if (navigator.userAgent.search(/(Android|iPhone|Windows Phone|Blackberry)/i) == -1) {
    $('a[href^="tel:"]').css({
        color: 'white',  // Schriftfarbe des Links
        textDecoration: 'none' // Unterstreichung unterdrücken
    });
    $('a[href^="tel:"]').mouseenter(function() {
         $(this).css({
             cursor: 'text' // Cursor beim Hover-State auf text setzen
         });
    });
}
// tel: usw. auf dem Desktop nicht verlinken - ENDE


// Show ToTop-Icon only if scrolled a little bit down
var showed = false;
var scrollTop = 0;
function jumpToElement(elem) {
    if( elem.length ) {
        $('html, body').animate({
            scrollTop: $(elem).offset().top}, {
            duration: 1000,
            complete: function(){
                hideToTop();
            }
        });

    }
}
window.onscroll = function() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 400) {
        if(!showed) {
            showToTop();
        }
    } else {
        if(showed) {
            hideToTop();
        }
    }
};
function hideToTop() {
    $( "div.totop" ).hide( "slow");
    showed = false;
}
function showToTop() {
    $( "div.totop" ).show( "slow");
    showed = true;
}

// Ganze Box verlinken
$(document).ready(function () {
    var boxlink= 'link'; // Klasse des Links einfügen; ohne Klasse(.) oder ID(#)
    var boxbutton= 'btn-kaestchen-link'; // oder Klassen des Buttons einfügen, wie zum Beispiel Fancybox; ohne Klasse(.) oder ID(#)
    var box = 'kaestchen'; // Klasse der Box; ohne Klasse(.) oder ID(#)
    jQuery("."+box).click(function() {
        if(jQuery(this).find("a").hasClass(boxlink)) {
            window.location = $(this).find("a").attr("href");
            return false;
        }
        if(jQuery(this).find("button").hasClass(boxbutton)) {
            var target= jQuery(this).find('.'+boxbutton).attr("data-target");
            var toggle= jQuery(this).find('.'+boxbutton).attr("data-toggle");
            jQuery(this).attr("data-target",target);
            jQuery(this).attr("data-toggle",toggle);
        }
    });
});

// Füge die Klasse "toggled" zu dem Navbar-toggler hinzu
jQuery(".navbar-header .navbar-toggler").click(function() {
    if(jQuery('.row-offcanvas').hasClass("active")) {
        jQuery(this).removeClass("toggled");
    } else {
        jQuery(this).addClass("toggled");
    }
});
jQuery(".closeToggle .navbar-toggler").click(function() {
    if(jQuery('.navbar-header .navbar-toggler').hasClass("toggled")) {
        jQuery(".navbar-header .navbar-toggler").removeClass("toggled");
    }
});

// Language Menu / Sprachmenü
jQuery(".currentLanguage").click(function() {
	if(jQuery(this).hasClass("toggled")) {
		jQuery(this).removeClass("toggled");
		jQuery(".menu--language").slideUp(500);
	} else {
		jQuery(this).addClass("toggled");
		jQuery(".menu--language").slideDown(500);
	}
});

// Automatisierte Höhenanpassung
/*
jQuery(window).load(function() {
    // Containerclass/ID angeben mit . oder #; bsp. '.gridelement'
    // Itemclass/ID angeben mit . oder #; bsp. '.column'
	jQuery(this).infoboxHoehenAnpassung('.CONTAINERCLASS/ID','.ITEMCLASS/ID');
});

jQuery.fn.infoboxHoehenAnpassung = function(container,element) {
	jQuery(container).each(function() {
		var highest_element = 0;
		jQuery(this).find(element).each(function() {
			if(jQuery(this).height() >= highest_element) {
				highest_element = jQuery(this).height();
			}
		});
		jQuery(this).find(element).height(highest_element);
	});
};
*/

jQuery('.magnific').magnificPopup({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
        verticalFit: true,
        titleSrc: function (item) {
            //return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
            return item.el.attr('title');
        }
    },
    gallery: {
        enabled: true
    },
    zoom: {
        enabled: true,
        duration: 500, // don't foget to change the duration also in CSS
        opener: function (element) {
            return element.find('img');
        }
    }
});
jQuery('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
});
$('.ce-gallery.magnificGallery').each(function() { // the containers for all your galleries
    $(this).magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
            titleSrc: function (item) {
                //return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
                return item.el.attr('title');
            }
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 500, // don't foget to change the duration also in CSS
            opener: function (element) {
                return element.find('img');
            }
        }
    });
});

// Responsive Table
jQuery(window).load(function() {
    jQuery('table').each(function() {
        var labels = [];
        jQuery(this).find("thead tr th").each(function() {
            labels.push(jQuery(this).text());
        });
        jQuery(this).find("tbody tr").each(function() {

            var td = 0;
            jQuery(this).find("td").each(function() {
                jQuery(this).wrapInner('<div class="responsive-table_right-content"></div>');
                jQuery('<div class="responsive-table_left-content"></div>').prependTo(this);
                jQuery(this).find(".responsive-table_left-content").attr("data-label",labels[td]);
                td++;
            });
        });
    });
});

jQuery(window).load(function() {
    jQuery('.sidebar-offcanvas a, .sidebar-offcanvas span').click(function (e) {
        var link = jQuery(this).attr('href');
        if (this.hash || (jQuery(this).is('span') && jQuery(this).hasClass('nav-link'))) {
            e.preventDefault();
            window.location.href = link;
            jQuery('.closeToggle .navbar-toggler').click();
        }
        else {
            console.log('no anchor');
        }
    });
});
