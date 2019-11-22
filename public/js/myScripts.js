

$(document).ready(function(){
    $("#nav-placeholder").load("nav.html");
});

// Smooth Scroll
$('.scrollTo').click(function(){
  $('html, body').animate({
      scrollTop: $( $(this).attr('href') ).offset().top
  }, 500);
  return false;
});

//Img Lightbox
$(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});
});



//Background images
$("#jumboHome").css("background-image", "url(https://i.imgur.com/6tS1WVR.jpg)");
$("#jumboAbout").css("background-image", "url(https://i.imgur.com/H4rzWkb.jpg)");
$("#jumboGallery").css("background-image", "url(https://i.imgur.com/wU2wpBO.jpg)");
$("#jumboServices").css("background-image", "url(https://i.imgur.com/5rCEzKW.jpg)");

//Hide Blog
$(".blog").css("display", "none");

$(".scrollTo").click(function(){return $("html, body").animate({scrollTop:$($(this).attr("href")).offset().top},500),!1}),$(document).ready(function(){$(".popup-gallery").magnificPopup({delegate:"a",type:"image",tLoading:"Loading image #%curr%...",mainClass:"mfp-img-mobile",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.',titleSrc:function(e){return e.el.attr("title")+"<small>by Marsel Van Oosten</small>"}}})}),$("#jumboHome").css("background-image","url(https://i.imgur.com/6tS1WVR.jpg)"),$("#jumboAbout").css("background-image","url(https://i.imgur.com/H4rzWkb.jpg)"),$("#jumboGallery").css("background-image","url(https://i.imgur.com/wU2wpBO.jpg)"),$("#jumboServices").css("background-image","url(https://i.imgur.com/5rCEzKW.jpg)"),$(".blog").css("display","none");
