$(document).ready(function(){
   mobMenu();
   extraMenu();
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
         var $parent = $(".extra");
         if ($parent.hasClass('extra-menu')) {
            $parent.removeClass('extra-menu');
         } else {
            $parent.addClass('extra-menu');
         }
   }); 
   $(".wrapper").on('click', function(event) {
      if (!$(event.target).closest(".extra").length) {
         if ($(".extra").hasClass("extra-menu")) {
            $(".extra").removeClass("extra-menu");
         }
      }
   });
}