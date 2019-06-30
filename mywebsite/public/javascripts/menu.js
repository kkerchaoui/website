$(document).ready(function(){
    var element = $('meta[name="active-menu"]').attr('content');
    $('#' + element).addClass('active');
});


function goToAbout() {   
    $('html,body').animate({
        scrollTop: $(".aboutSec").offset().top},
        'slow');
}

function goToSocial() {   
    $('html,body').animate({
        scrollTop: $(".socialSec").offset().top},
        'slow');
}

function goToContact() {   
    $('html,body').animate({
        scrollTop: $(".contactSec").offset().top},
        'slow');
}

new TypeIt('#introSpeech', {
    strings: ["I'M KHELIL KM.", "I'M WEB DEVELOPER."],
    speed: 200,
    breakLines: false,
    waitUntilVisible: true,
    loop: true
  }).go();

$(document).ready(function() {
    $("#downtoabout").click(function() {
         $('html, body').animate({
             scrollTop: $(".aboutSec").offset().top
         }, 1500);
     });
    });
    
$(document).ready(function() {
    $(".up").click(function() {
        $('html, body').animate({
            scrollTop: $(".down").offset().top
        }, 1000);
    });
});