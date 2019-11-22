

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

//Footer photo creditCopyText
var url = window.location.href
var home = "https://spencertakata.com/"
var index = "https://spencertakata.com/index.html"
var about = "https://spencertakata.com/about.html"
var services = "https://spencertakata.com/services.html"

if(url == home || url == index){
  $(function(){
    $("#photo-cred").html(<a href="https://unsplash.com/@robertbye">Rob Bye</a>);
  };
};

else if (url == about){
  $(function(){
    $("#photo-cred").html(<a href="https://unsplash.com/@cbarbalis">Chris Barbalis</a>);
  };
};

else if (url == services){
  $(function(){
    $("#photo-cred").html(<a href="https://unsplash.com/@anete_lusina">Anete Lūsiņa</a>);
  });
};

else if (url == "https://spencertakata.com/contact.html"){

}
else {
  $(function(){
    $(".footnote").css("display", "none");
  };
};

//Background images
$("#jumboHome").css("background-image", "url(https://i.imgur.com/6tS1WVR.jpg)");
$("#jumboAbout").css("background-image", "url(https://i.imgur.com/H4rzWkb.jpg)");
$("#jumboGallery").css("background-image", "url(https://i.imgur.com/wU2wpBO.jpg)");
$("#jumboServices").css("background-image", "url(https://i.imgur.com/5rCEzKW.jpg)");

//Hide Blog
$(".blog").css("display", "none");
