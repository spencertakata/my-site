$(document).ready(function() {
    console.log("connected");

    $('.scrollTo').click(function(){
      $('html, body').animate({
          scrollTop: $( $(this).attr('href') ).offset().top
      }, 500);
      return false;
    });

    //Footer photo creditCopyText
    var url = window.location.href;
    var homeShort = "spencertakata.com";
    var home = "https://spencertakata.com/";
    var index = "https://spencertakata.com/index";
    var about = "https://spencertakata.com/about";
    var services = "https://spencertakata.com/services";

    if(url == "https://spencertakata.com/" || url == "https://spencertakata.com/index"){
        $("#photo-cred").html("Banner photo by <a href='https://unsplash.com/@robertbye'>Rob Bye</a>");
    }
    else if(url == "https://spencertakata.com/about"){
        $("#photo-cred").html("Banner photo by <a href='https://unsplash.com/@cbarbalis'>Chris Barbalis</a>");
    }
    else if (url == "https://spencertakata.com/services"){
        $("#photo-cred").html("Banner photo by <a href='https://unsplash.com/@anete_lusina'>Anete Lūsiņa</a>");
    }
    else {
        $("#photo-cred").html("");
    };

    //Hide Blog
    $(".blog").css("display", "none");
});
