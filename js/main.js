$(document).ready(function(){
  $('').slick({
    slidesToShow: 3,
  });
  $('.pagination').on('click', 'button', function(){
    $('.pagination-button').removeClass("pagination-button__active");
    $(this).addClass('pagination-button__active');
  });
  $('.triger').on('click', function (){
    $('.menu-mobile').toggleClass('mobile-active');
    $('body').toggleClass('lock');
  });
  $(function(){
    $(".accordion-items .accordion-item.active").children(".accordion-list").slideDown('fast');
    $(".accordion-items .accordion-item").click(function(){
      $(this).siblings(".accordion-item").removeClass("active").children(".accordion-list").slideUp('fast');
      $(this).toggleClass("active").children(".accordion-list").slideToggle("fast");
    });
  });
});
