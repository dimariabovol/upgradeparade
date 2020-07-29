$(document).ready(function(){
   mobMenu();
   dropdown();
   header();
});

function mobMenu() {
   $(".header__burger").on('click', function () {
         var $parent = $(".header");
         if ($parent.hasClass('mob-menu')) {
            $parent.removeClass('mob-menu');
         } else {
            $parent.addClass('mob-menu');
         }
   }); 
   $(".wrapper").on('click', function(event) {
      if (!$(event.target).closest(".header__burger, .header__nav").length) {
         if ($(".header").hasClass("mob-menu")) {
            $(".header").removeClass("mob-menu");
         }
      }
   });
}

function dropdown() {
   $(".dropdown__button").on('click', function () {
         var $parent = $(".dropdown");
         if ($parent.hasClass('dropdown-open')) {
            $parent.removeClass('dropdown-open');
         } else {
            $parent.addClass('dropdown-open');
         }
   }); 
   $(".wrapper").on('click', function(event) {
      if (!$(event.target).closest(".dropdown__button, .dropdown__menu").length) {
         if ($(".dropdown").hasClass("dropdown-open")) {
            $(".dropdown").removeClass("dropdown-open");
         }
      }
   });
}

function header() {
   $(window).scroll(function() {
      if ($(window).scrollTop() > 72) {
         $('.header').addClass('shadow');
      }
      else {
         $('.header').removeClass('shadow');
      }
   });
}