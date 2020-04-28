var bodywidth = document.body.clientWidth;
jQuery(window).resize(function() {
    bodywidth = document.body.clientWidth;
});
/*!
 * Bootstrap 4 multi dropdown navbar ( https://bootstrapthemes.co/demo/resource/bootstrap-4-multi-dropdown-navbar/ )
 * Copyright 2017.
 * Licensed under the GPL license
 */
$(document).ready(function() {
    // executes when HTML-Document is loaded and DOM is ready
    // $(".navbar-nav").clone().appendTo("#sidebar");
    $(function() {
        $(document).trigger("enhance");
    });

    jQuery(".navbar-toggler").click(function() {
        if(!jQuery(".row-offcanvas-right").hasClass("active")) {
            jQuery(".row-offcanvas-right").addClass("active");
			jQuery(".schwarzTransparenterHintergrund").addClass("active");
        } else {
            jQuery(".row-offcanvas-right").removeClass("active");
			jQuery(".schwarzTransparenterHintergrund").removeClass("active");
        }
    });
    $( '.mobileToggleDropdown' ).on( 'click', function ( e ) {
        var $el = $( this );
        var $parent = $( this ).offsetParent( ".dropdown-menu" );
        if ( !$( this ).next().hasClass( 'show' ) ) {
            $( this ).parents( '.dropdown-menu' ).first().find( '.show' ).removeClass( "show" );
        }
        var $subMenu = $( this ).next( ".dropdown-menu" );
        $subMenu.toggleClass( 'show' );

        $( this ).parent( "li" ).toggleClass( 'show' );

        $( this ).parents( 'li.nav-item.dropdown.show' ).on( 'hidden.bs.dropdown', function ( e ) {
            $( '.dropdown-menu .show' ).removeClass( "show" );
        } );

        if ( !$parent.parent().hasClass( 'navbar-nav' ) ) {
            $el.next().css( { "top": $el[0].offsetTop, "left": $parent.outerWidth() - 4 } );
        }

        return false;
    } );
    // document ready
});


/*if(bodywidth <= 992) {
    $(document).ready(function() {
        // executes when HTML-Document is loaded and DOM is ready
        console.log("document is ready");
        $(".navbar-nav").clone().appendTo("#sidebar");
        $(function() {
            $(document).trigger("enhance");
        });
        // document ready
    });

    $( document ).ready( function () {
        $( '.mobileToggleDropdown' ).on( 'click', function ( e ) {
            var $el = $( this );
            var $parent = $( this ).offsetParent( ".dropdown-menu" );
            if ( !$( this ).next().hasClass( 'show' ) ) {
                $( this ).parents( '.dropdown-menu' ).first().find( '.show' ).removeClass( "show" );
            }
            var $subMenu = $( this ).next( ".dropdown-menu" );
            $subMenu.toggleClass( 'show' );

            $( this ).parent( "li" ).toggleClass( 'show' );

            $( this ).parents( 'li.nav-item.dropdown.show' ).on( 'hidden.bs.dropdown', function ( e ) {
                $( '.dropdown-menu .show' ).removeClass( "show" );
            } );

            if ( !$parent.parent().hasClass( 'navbar-nav' ) ) {
                $el.next().css( { "top": $el[0].offsetTop, "left": $parent.outerWidth() - 4 } );
            }

            return false;
        } );
    } );


    $(window).load(function() {
        // executes when complete page is fully loaded, including all frames, objects and images
        console.log("window is loaded");
        // window load
    });

    $(document).ready(function () {
        $('[data-toggle="offcanvas"]').click(function () {
            $('.row-offcanvas').toggleClass('active')
        });
    });
}*/
