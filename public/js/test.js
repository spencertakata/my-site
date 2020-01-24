$(document).ready(function() {
    console.log("connected");

    $('.scrollTo').click(function(){
      $('html, body').animate({
          scrollTop: $( $(this).attr('href') ).offset().top
      }, 500);
      return false;
    });

//Img Lightbox
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

    //Footer photo creditCopyText
    var url = window.location.href
    var home = "https://spencertakata.com/"
    var index = "https://spencertakata.com/index.html"
    var about = "https://spencertakata.com/about.html"
    var services = "https://spencertakata.com/services.html"

    function photoCred(url){
        if(url == home || url == index){
            //document.getElementById("photo-cred").innerHTML = "Banner photo by <a href='https://unsplash.com/@robertbye'>Rob Bye</a>";
            $(".photo-cred").html("Banner photo by <a href='https://unsplash.com/@robertbye'>Rob Bye</a>")
        }
        else if(url == about){
            //document.getElementById("photo-cred").innerHTML = "Banner photo by <a href='https://unsplash.com/@cbarbalis'>Chris Barbalis</a>";
            $("#photo-cred").html("Banner photo by <a href='https://unsplash.com/@cbarbalis'>Chris Barbalis</a>");
        }
        else if (url == services){
            //document.getElementById("photo-cred").innerHTML = "Banner photo by <a href='https://unsplash.com/@anete_lusina'>Anete Lūsiņa</a>";
            $("#photo-cred").html("Banner photo by <a href='https://unsplash.com/@anete_lusina'>Anete Lūsiņa</a>");
        }
        else {
            //document.getElementById("photo-cred").innerHTML = "If statement works";
            $("#photo-cred").html("Jquery works");
        };
    };
    photoCred();


    //Background images
    $("#jumboHome").css("background-image", "url(https://i.imgur.com/6tS1WVR.jpg)");
    $("#jumboAbout").css("background-image", "url(https://i.imgur.com/H4rzWkb.jpg)");
    $("#jumboGallery").css("background-image", "url(https://i.imgur.com/wU2wpBO.jpg)");
    $("#jumboServices").css("background-image", "url(https://i.imgur.com/5rCEzKW.jpg)");

    //Hide Blog
    $(".blog").css("display", "none");
});
