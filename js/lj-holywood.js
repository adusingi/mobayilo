/*
  Author: Lumberjacks
  Template: Holy Wood (Landing Page)
  Version: 1.0
  URL: http://themeforest.net/user/Lumberjacks/
*/

(function($) {
  "use strict";

  $(document).ready(function (){
    'use strict';

    // E-mail validation via regular expression
    function isValidEmailAddress(emailAddress) {
      var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
      return pattern.test(emailAddress);
    };

    // Subscription form notifications and AJAX function
    $(function () {
      $("#subscribe").on('submit', function (event) {
        var input = $('.lj-subscribe-message');
          if(!input.is(':empty')) {
            $('.lj-subscribe-message').stop(true);
          }
          event.preventDefault();
          event.stopImmediatePropagation();

          var email = $("input#subscribe-email").val();

          if (email == "") {

            $(".lj-subscribe-message").stop(true).html('<i class="fa fa-warning"></i> You must enter a valid e-mail address.');
            $("input#subscribe-email").focus();
          }
          else if (!isValidEmailAddress( email )) {
            $(".lj-subscribe-message").stop(true).html('<i class="fa fa-warning"></i> E-mail address is not valid.');
            $("input#subscribe-email").focus();
          }
          else {
            $.ajax({
              type: "POST",
              url: "./php/send-subscription.php",
              data: {subscription:email},
              success: function () {
                $(".lj-subscribe-message").html('<i class="fa fa-check"></i> We will be in touch soon!');
                $('input#subscribe-email').val('');
              }
            });
          }
       });
    });

    // Join now form functions
    $(function () {
      $("#join-now").on('submit',function (event) {
        var input = $('.lj-join-now-message');
          if(!input.is(':empty')) {
            $('.lj-join-now-message').stop(true);
          }
          event.preventDefault();
          event.stopImmediatePropagation();

          var name = $("input#join-now-name").val();
          var email = $("input#join-now-email").val();

          if (name == "" || email == "") {

            $(".lj-join-now-message").stop(true).html('<i class="fa fa-warning"></i> All fields are required.');
            $('#join-now input[type=text]').each(function() {
                if ( this.value === '' ) {
                    this.focus();
                    return false;
                }
            });
          }
          else if (!isValidEmailAddress( email )) {
            $(".lj-join-now-message").stop(true).html('<i class="fa fa-warning"></i> E-mail address is not valid.');
            $("input#join-now-email").focus();
          }
          else {
            $.ajax({
              type: "POST",
              url: "./php/send-join-now.php",
              data: {join_now_email:email,
                     join_now_name:name},
              success: function () {
                $(".lj-join-now-message").html('<i class="fa fa-check"></i> Thank you for joining in!');
                $('input#join-now-name').val('');
                $('input#join-now-email').val('');
              }
            });
          }
       });
    });

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

    // Scroll to subscribe module
    $(".lj-text-button a").on('click',function(e) {
      e.preventDefault();
      $('html,body').animate({
        scrollTop: $(".subscribe").offset().top},
        1250);
        setTimeout(function() {
          $('input#subscribe-email').focus();
        }, 1250);
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
    $("header").backstretch("img/bg.jpg");
    $(".photo").backstretch("img/bg-2.jpg");
    $(".photo-centered").backstretch("img/bg-3.jpg");

    // Simple Text Rotator
    $("#words").wordsrotator({
      autoLoop: true,             //auto rotate words
      randomize: false,               //show random entries from the words array
      stopOnHover: false,             //stop animation on hover
      changeOnClick: false,           //force animation run on click
      animationIn: "fadeInDown",         //css class for entrace animation
      animationOut: "fadeOutUp",           //css class for exit animation
      speed: 4000,                //delay in milliseconds between two words
      words: ['<strong>Everything you need</strong> for your next telecom deployement.','<strong>Simple and easy</strong> modern software.','<strong>Data, maps, communication, approvals</strong> all in one.']  //Array of words, it may contain HTML values
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
      words: ['<strong>Boost the productivity </strong> of your telecom engineering team.','Software by <strong>telecom engineers for telecom engineers</strong>.']  //Array of words, it may contain HTML values
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
