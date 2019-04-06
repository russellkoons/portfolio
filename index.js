'use strict';

$(function() {
  $(window).scroll(function () {
    const plantry = $('#project1').offset().top - 85;
    const training = $('#project2').offset().top - 85;
    const genre = $('#project3').offset().top - 85;

    if ($(this).scrollTop() > plantry) {
      $('#container').addClass('changepurple');
      $('#hambutton').addClass('changepurple');
      $('#projects').addClass('changepurple');
    } 
    if ($(this).scrollTop() > training && $(this).scrollTop() < genre) {
      $('#container').removeClass('changepurple');
      $('#hambutton').removeClass('changepurple');
      $('#container').addClass('changegrey');
      $('#hambutton').addClass('changegrey');
    }
    if ($(this).scrollTop() > genre) {
      $('#container').removeClass('changegrey');
      $('#hambutton').removeClass('changegrey');
      $('#container').addClass('changewood');
      $('#hambutton').addClass('changewood');
    }
    if ($(this).scrollTop() < plantry) {
      $('#container').removeClass('changepurple');
      $('#hambutton').removeClass('changepurple');
      $('#projects').removeClass('changepurple');
    }
    if ($(this).scrollTop() > plantry && $(this).scrollTop() < training) {
      $('#container').removeClass('changegrey');
      $('#hambutton').removeClass('changegrey');
      $('#container').addClass('changepurple');
      $('#hambutton').addClass('changepurple');
    }
    if ($(this).scrollTop() > training && $(this).scrollTop() < genre) {
      $('#container').removeClass('changewood');
      $('#hambutton').removeClass('changewood');
      $('#container').addClass('changegrey');
      $('#hambutton').addClass('changegrey');
    }
  });
});

function toggleMenu() {
  $('#hambutton').click(() => {
    if ($('#hamburgerlinks').hasClass('hidden')) {
      $('#hamburgerlinks').removeClass('hidden');
    } else {
      $('#hamburgerlinks').addClass('hidden');
    }
  })
}

$(toggleMenu());