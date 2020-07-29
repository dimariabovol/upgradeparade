$(document).ready(function(){
   mobMenu();
   extraMenu();
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

function extraMenu() {
   $(".extra").on('click', function () {
         var $parent = $(".header");
         if ($parent.hasClass('link-menu')) {
            $parent.removeClass('link-menu');
         } else {
            $parent.addClass('link-menu');
         }
   }); 
   $(".wrapper").on('click', function(event) {
      if (!$(event.target).closest(".extra, .extra__menu").length) {
         if ($(".header").hasClass("link-menu")) {
            $(".header").removeClass("link-menu");
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