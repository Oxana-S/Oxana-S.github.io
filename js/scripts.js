/*!
    * Start Bootstrap - Freelancer v6.0.1 (https://startbootstrap.com/themes/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-freelancer/blob/master/LICENSE)
    */
    (function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    // The Scrollspy Plugin для Bootstrap ссылка на учебник по нему:
    // https://www.w3schools.com/bootstrap/bootstrap_scrollspy.asp
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });
  
  })(jQuery); // End of use strict

// Scrolling 
// Scroll selector - #avatar-top (window)

$(document).ready(function () {
    $(window).scroll(function () {

    // if the user has scrolled the page by more than 350px
    if ($(this).scrollTop() > 350) {
      // then make the #logo-top button visible
      $('#logo-top').fadeIn();
    }
    // otherwise hide the #logo-top button
    else {
      $('#logo-top').fadeOut();
      // $("#logo-top").attr('style', 'display: none');
    }
  });
});

// Scroll selector -(sample) (window)

$(window).scroll(function () {

  // if the user has scrolled the page by more than 350px
  if ($(this).scrollTop() > 350) {
    // then make the #logo-top button visible
    $('sample').fadeIn();
  }
  // otherwise hide the #logo-top button
  else {
    // $('#logo-top')
    $("sample").fadeOut();
  }
});
// Изменение размера дя textarea
$("textarea").resizable();