

(function($) {
  "use strict";

  $(document).ready(function (){
    'use strict';

    // E-mail validation via regular expression
    function isValidEmailAddress(emailAddress) {
      var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
      return pattern.test(emailAddress);
    };


    // Slick initializer function
    $(".lj-carousel").slick({
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,
      arrows: false
    });
    $(".lj-clients-carousel").slick({
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,
      arrows: false
    });

    // Scroll to next module after Header section
    $(".lj-scroll-down a").on('click',function(e) {
      e.preventDefault();
      $('html,body').animate({
        scrollTop: $("header").nextAll('.module').offset().top},
        1250);
    });

    // Featherlight
    $('.lj-projects-item a').featherlight({
        targetAttr:     'href',
        closeOnClick:   'anywhere'
    });

    // Countdown
    // To change date, simply edit: var endDate = "January 1, 2016 00:00:00";
    $(function() {
      var endDate = "January 1, 2016 00:00:00";
      $('.lj-countdown .row').countdown({
        date: endDate,
        render: function(data) {
          $(this.el).html('<div><div><span>' + (parseInt(this.leadingZeros(data.years, 2)*365) + parseInt(this.leadingZeros(data.days, 2))) + '</span><span>days</span></div><div><span>' + this.leadingZeros(data.hours, 2) + '</span><span>hours</span></div></div><div class="lj-countdown-ms"><div><span>' + this.leadingZeros(data.min, 2) + '</span><span>minutes</span></div><div><span>' + this.leadingZeros(data.sec, 2) + '</span><span>seconds</span></div></div>');
        }
      });
    });

    // backstretch
    $("header").backstretch("img/york.jpg");
    $(".photo").backstretch("img/bg-2.jpg");
    $(".photo-centered").backstretch("img/collab.jpg");
    $(".logos-partner").backstretch("img/telecomoss.jpg");

    // Simple Text Rotator
    $("#words").wordsrotator({
      autoLoop: true,             //auto rotate words
      randomize: false,               //show random entries from the words array
      stopOnHover: false,             //stop animation on hover
      changeOnClick: false,           //force animation run on click
      animationIn: "fadeInDown",         //css class for entrace animation
      animationOut: "fadeOutUp",           //css class for exit animation
      speed: 4000,                //delay in milliseconds between two words
      words: ['Network Parameters, Maps, Dashboard, Communication and Integration info in one Place','Everything you need for you daily network follow-up activities','Simple and easy-to-use modern application']  //Array of words, it may contain HTML values
    });

    // Simple Text Rotator
    $("#words2").wordsrotator({
      autoLoop: true,             //auto rotate words
      randomize: false,               //show random entries from the words array
      stopOnHover: false,             //stop animation on hover
      changeOnClick: false,           //force animation run on click
      animationIn: "fadeInDown",         //css class for entrace animation
      animationOut: "fadeOutUp",           //css class for exit animation
      speed: 4000,                //delay in milliseconds between two words
      words: ['Boost your team’s <strong>collaboration and productivity</strong> of your telecom engineering team.','TeamWork application by telecom engineers for telecom engineers.']  //Array of words, it may contain HTML values
    });

    // WOW initalization
    new WOW().init();

    // block scroll mouse button
    $(function() {
      $('body').mousedown(function(e){if(e.button==1)return false});
    });

    // hiding other team members on hover
    $(".lj-team-person").on({
      mouseenter: function () {
        $('.lj-team-person').not($(this)).css("opacity", "0.25");
      },
      mouseleave: function () {
        $('.lj-team-person').not($(this)).css("opacity", "1");
      }
    });

  });

  // Preloader
  // Change delay and fadeOut speed (in miliseconds)
  $(window).load(function() {
    $(".lj-preloader").delay(100).fadeOut(500);
  });

})(jQuery);
