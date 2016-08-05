jQuery(document).ready(function () {

    "use strict";
	
    // ===== Pre loading ===== //
    $(window).load(function () {
        $('.preloader-wrapper').fadeOut(300);
        $('.transition').removeClass("transition-preload");
    });
	
	
    // ===== Custom Data Attribute ===== //
    var bgImage = ".overlay, .fullpage-img, .featured-area.fit-height"

    $("*").css('height', function () {
        var heightAttr = $(this).attr('data-height') + 'px';
        return heightAttr;
    });

    $("*").css('color', function () {
        var colorAttr = $(this).data('color');
        return colorAttr;
    });

    $("*").css('opacity', function () {
        var opacityAttr = $(this).data('opacity');
        return opacityAttr;
    });

    $("*").css('background-color', function () {
        var bgcolorAttr = $(this).data('bg-color');
        return bgcolorAttr;
    });

    $(bgImage).css('background-image', function () {
        var bg = ('url(' + $(this).data("image-src") + ')');
        return bg;
    });
	
	
    // ===== Animated Sticky Header ===== //
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            $('header').addClass("sticky");
            $('.content-wrapper').addClass("scroll");
        }
        else {
            $('header').removeClass("sticky");
            $('.content-wrapper').removeClass("scroll");
        }
    })
	
	
    // Enable scroll on html, body for scrolling page
    if ($('body').hasClass("pageScroll")) {
        $('html, body').addClass("enableScroll");
    }
    else {
        $('html, body').removeClass("enableScroll");
    }
	
	
    // ===== Disable body scroll when navigation overlay showing ===== //
    $('#trigger-menu').on("click", function () {
        if ($('body').hasClass("pageScroll")) {
            $('html, body').removeClass("enableScroll");
        }
    });

    $('.overlay-close').on("click", function () {
        if ($('body').hasClass("pageScroll")) {
            $('html, body').addClass("enableScroll");
        }
    });
	
	
    // ===== Add vertical middle to navigation menu ===== //
    var windowHeight = $(window).height();
    var navHeight = $('.main-menu').height();

    if (navHeight < windowHeight) {
        $('.main-menu').addClass("vertical-middle");
    }
    else {
        $('.main-menu').removeClass("vertical-middle");
    }
	
	
    // ===== Fit Image to DIV ===== //
    $('.fit-img').each(function () {
        var $div = $(this),
            $img = $('img', $div),
            src = $img.attr('src');
        $div.css('backgroundImage', 'url(' + src + ')');
        $img.remove();
    });
	
	
    // ===== Animation Settings ===== //
    var animateFadeIn = ".animate-fadeIn:in-viewport";
    var animateFadeInUp = ".animate-fadeInUp:in-viewport";
    var animateFadeInDown = ".animate-fadeInDown:in-viewport";
    var animateFadeInLeft = ".animate-fadeInLeft:in-viewport";
    var animateFadeInRight = ".animate-fadeInRight:in-viewport";

    $(animateFadeIn).each(function () {
        $(animateFadeIn).delay(300).animate({ opacity: 1 }, 2000, 'easeOutExpo');
    });
    $(animateFadeInUp).each(function () {
        $(animateFadeInUp).delay(300).animate({ top: '0', opacity: 1 }, 2000, 'easeOutExpo');
    });
    $(animateFadeInDown).each(function () {
        $(animateFadeInDown).delay(300).animate({ top: '0', opacity: 1 }, 2000, 'easeOutExpo');
    });
    $(animateFadeInLeft).each(function () {
        $(animateFadeInLeft).delay(300).animate({ left: '0', opacity: 1 }, 2000, 'easeOutExpo');
    });
    $(animateFadeInRight).each(function () {
        $(animateFadeInRight).delay(300).animate({ left: '0', opacity: 1 }, 2000, 'easeOutExpo');
    });

    $(window).on("scroll", function () {
        $(animateFadeIn).each(function () {
            $(animateFadeIn).delay(300).animate({ opacity: 1 }, 2000, 'easeOutExpo');
        });
        $(animateFadeInUp).each(function () {
            $(animateFadeInUp).delay(300).animate({ top: '0', opacity: 1 }, 2000, 'easeOutExpo');
        });
        $(animateFadeInDown).each(function () {
            $(animateFadeInDown).delay(300).animate({ top: '0', opacity: 1 }, 2000, 'easeOutExpo');
        });
        $(animateFadeInLeft).each(function () {
            $(animateFadeInLeft).delay(300).animate({ left: '0', opacity: 1 }, 2000, 'easeOutExpo');
        });
        $(animateFadeInRight).each(function () {
            $(animateFadeInRight).delay(300).animate({ left: '0', opacity: 1 }, 2000, 'easeOutExpo');
        });
    });
	
    // ===== jQuery Megafolio Settings ===== //
    // Homepage gallery items
    var api = jQuery('.home-gallery-item .megafolio-container').megafoliopro({
        filterChangeAnimation: "pagemiddle",
        filterChangeSpeed: 800,
        paddingHorizontal: 0,
        paddingVertical: 0,
        layoutarray: [7]
    });
	
    // Gallery page items
    var galleryPage = jQuery('.gallery-page-item .megafolio-container').megafoliopro({
        filterChangeAnimation: "pagemiddle",
        filterChangeSpeed: 800,
        paddingHorizontal: 0,
        paddingVertical: 0,
        layoutarray: [7]
    });
	
    // Gallery page items grid square
    var gallerySquare = jQuery('.gallery-grid-square .megafolio-container').megafoliopro({
        filterChangeAnimation: "pagemiddle",
        filterChangeSpeed: 800,
        paddingHorizontal: 0,
        paddingVertical: 0,
        layoutarray: [11]
    });
	
    // Gallery page items grid random
    var galleryRandom = jQuery('.gallery-grid-random .megafolio-container').megafoliopro({
        filterChangeAnimation: "pagemiddle",
        filterChangeSpeed: 800,
        paddingHorizontal: 0,
        paddingVertical: 0,
        layoutarray: [0]
    });
	
    // Gallery page items grid different height
    var galleryDifferentHeight = jQuery('.gallery-different-height .megafolio-container').megafoliopro({
        filterChangeAnimation: "pagemiddle",
        filterChangeSpeed: 800,
        paddingHorizontal: 0,
        paddingVertical: 0,
        layoutarray: [15]
    });
	
    // Gallery single page grid style 1
    var galleryPost1 = jQuery('.gallery-post.post-item1 .megafolio-container').megafoliopro({
        filterChangeAnimation: "pagemiddle",
        filterChangeSpeed: 800,
        paddingHorizontal: 24,
        paddingVertical: 24,
        layoutarray: [7, 5]
    });
	

    // Gallery single page grid style 2
    var galleryPost2 = jQuery('.gallery-post.post-item2 .megafolio-container').megafoliopro({
        filterChangeAnimation: "pagemiddle",
        filterChangeSpeed: 800,
        paddingHorizontal: 24,
        paddingVertical: 24,
        layoutarray: [14]
    });
	
    // Gallery single page grid square
    var galleryPostSquare = jQuery('.gallery-post.post-grid-square .megafolio-container').megafoliopro({
        filterChangeAnimation: "pagemiddle",
		filterChangeSpeed: 800,
        paddingHorizontal: 24,
        paddingVertical: 24,
        layoutarray: [10]
	});
	
    
// CALL FILTER FUNCTION IF ANY FILTER HAS BEEN CLICKED
jQuery('.filter').on("click", function () {
    jQuery('.filter').each(function () {
        jQuery(this).removeClass("selected")
    });
    api.megafilter(jQuery(this).data('category'));
    galleryPage.megafilter(jQuery(this).data('category'));
    gallerySquare.megafilter(jQuery(this).data('category'));
    galleryRandom.megafilter(jQuery(this).data('category'));
    galleryDifferentHeight.megafilter(jQuery(this).data('category'));
    jQuery(this).addClass("selected");
});
	
	
// ===== FancyBox Settings ===== //
$(".fancybox").fancybox();
	
	
// ===== jQuery Isotope Settings ===== //
var $isotopeGallery = $('.gallery-list-masonry');

$isotopeGallery.imagesLoaded(function () {
    $isotopeGallery.isotope({
        itemSelector: '.masonry-item',
        transitionDuration: '0.8s'
    });
});
	
// filter items when filter link is clicked
$('.category-filter ul li').on("click", function () {
    var filterValue = $(this).attr('data-filter');
    $isotopeGallery.isotope({
        filter: filterValue
    });
});

	
// ===== jQuery FlexSlider Settings ===== //
$(window).on("load", function () {
    $('.flexslider-capa').flexslider({
        controlNav: false,
        directionNav: false,
        slideshow: true,
        animationSpeed: 800,
        multipleKeyboard: true,
        pauseOnHover: true
    });
		
    // Homepage slider custom navigation
    $('.slide-wrapper .slide-prev, .slide-wrapper .slide-next').on('click', function () {
        var href = $(this).attr('href');
        $('.flexslider-capa').flexslider(href)
        return false;
    });

    $('.flexslider-comment').flexslider({

        directionNav: false,
        animation: 'slide'
    });

});
	
	
// ===== jQuery Fullpage Settings ===== //
$('#fullpage').fullpage({
    navigation: true,
    slidesNavigation: false,
    css3: false
});
	
// Add class to horizontal slide section
$("#fullpage .section:has(div.slide)").each(function () {
    $(this).addClass("fp-horizontal-slide");
});
	
// Add move down mouse icon
$('.fullpage-share').next(".section").find(".fullpage-title .container").prepend("<div class='fp-mouse-scroll'></div>");
$('.fp-mouse-scroll').on("click", function (e) {
    e.preventDefault();
    $.fn.fullpage.moveSectionDown();
});
	
	
// ===== Tooltip Settings ===== //
// Related Gallery Tooltip
$('.gallery-tooltip').tooltipster({
    position: 'top',
    animation: 'grow',
    delay: 200,
    speed: 350,
    theme: 'custom-theme01',
    touchDevices: true,
    trigger: 'hover',
    maxWidth: 220,
    offsetX: 0,
    offsetY: -40
});
	
// ===== Placeholder ===== //
$.fn.placeholder();
	
	
// ===== Go to top setting ===== //
$("a[href='#top']").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});
	
	
// ===== Contact Form Submit Settings ===== //
$("#submit_message").on("click", function () {
    $('#reply_message').removeClass();
    $('#reply_message').html('')
    var regEx;
				
    // validate Name
    var name = $("input#name").val();
    regEx = /^[A-Za-z .'-]+$/;
    if (name == "" || name == "Name" || !regEx.test(name)) {
        $("input#name").val('');
        $("input#name").focus();
        return false;
    }
		
    // validate Email
    var email = $("input#email").val();
    regEx = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    if (email == "" || email == "Email" || !regEx.test(email)) {
        $("input#email").val('');
        $("input#email").focus();
        return false;
    }
		
    // validate Subject
    var mysubject = $("input#subject").val();
    regEx = /^[A-Za-z0-9 .'-]+$/;
    if (mysubject == "" || mysubject == "Mysubject" || !regEx.test(mysubject)) {
        $("input#subject").val('');
        $("input#subject").focus();
        return false;
    }
		
    // validate Message
    var mymessage = $("textarea#message").val();
    if (mymessage == "" || mymessage == "message" || mymessage.length < 2) {
        $("textarea#message").val('');
        $("textarea#message").focus();
        return false;
    }

    var dataString = 'name=' + $("input#name").val() + '&email=' + $("input#email").val() + '&subject=' + $("input#subject").val() + '&message=' + $("textarea#message").val();

    $('.loading').fadeIn(500);
		
    // Send form data to mailer.php
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: dataString,
        success: function () {
            $('.loading').hide();
            $('#reply_message').addClass('list3');
            $('#reply_message').html("<span>Email enviado com sucesso</span>")
                .fadeIn(1500);
            $('#form_contact')[0].reset();
        }
    });
    return false;
});
	
});


// ===== Social Media Share Pop-up ===== //
function facebookShare(url, winWidth, winHeight) {
    var winTop = (screen.height / 2) - (winHeight / 2);
    var winLeft = (screen.width / 2) - (winWidth / 2);
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight);
}

function twitterShare(url, winWidth, winHeight) {
    var winTop = (screen.height / 2) - (winHeight / 2);
    var winLeft = (screen.width / 2) - (winWidth / 2);
    window.open('https://twitter.com/home?status=' + url, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight);
}

function googleShare(url, winWidth, winHeight) {
    var winTop = (screen.height / 2) - (winHeight / 2);
    var winLeft = (screen.width / 2) - (winWidth / 2);
    window.open('https://plus.google.com/share?url=' + url, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight);
}

function pinterestShare(url, winWidth, winHeight) {
    var winTop = (screen.height / 2) - (winHeight / 2);
    var winLeft = (screen.width / 2) - (winWidth / 2);
    window.open('https://pinterest.com/pin/create/button/?url=&media=' + url, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight);
}

function linkedinShare(url, winWidth, winHeight) {
    var winTop = (screen.height / 2) - (winHeight / 2);
    var winLeft = (screen.width / 2) - (winWidth / 2);
    window.open('https://www.linkedin.com/shareArticle?mini=true&url=' + url, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight);
}