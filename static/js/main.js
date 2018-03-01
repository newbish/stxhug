jQuery(document).ready(function ($) {

  var $toggle = $('#navbar-toggle');
  var $menu = $('#navbar-menu');

  $toggle.click(function() {
    $(this).toggleClass('is-active');
    $menu.toggleClass('is-active');
  });
});

// Toggles

var $burgers = getAll('.burger');
var $fries = getAll('.fries');

if ($burgers.length > 0) {
  $burgers.forEach(function ($el) {
    $el.addEventListener('click', function () {
      var target = $el.dataset.target;
      var $target = document.getElementById(target);
      $el.classList.toggle('is-active');
      $target.classList.toggle('is-active');
    });
  });
}

// Functions

function getAll(selector) {
  return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
}
var deck = document.querySelectorAll('#slides');
deck.forEach(c => { 
  let slides = c.querySelectorAll(".slide");
  let currentSlide = 0;
  let slideInterval = setInterval(() => {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
  },3700);
});
