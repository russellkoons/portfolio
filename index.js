'use strict';

$(function() {
  $(window).scroll(function () {
    const hgt = $('#container').height();
    const plantry = $('#project1').offset().top - hgt;
    const training = $('#project2').offset().top - hgt;
    const genre = $('#project3').offset().top - hgt;
    const portfolio = $('#project4').offset().top - hgt;

    if ($(this).scrollTop() < plantry) {
      $('#container').removeClass('changepurple').removeClass('changegrey').removeClass('changewood');
      $('#hambutton').removeClass('changepurple').removeClass('changegrey').removeClass('changewood');
    }
    if ($(this).scrollTop() > plantry && $(this).scrollTop() < training) {
      $('#container').removeClass('changegrey').removeClass('changewood');
      $('#hambutton').removeClass('changegrey').removeClass('changewood');
      $('#container').addClass('changepurple');
      $('#hambutton').addClass('changepurple');
    } 
    if ($(this).scrollTop() > training && $(this).scrollTop() < genre) {
      $('#container').removeClass('changepurple').removeClass('changewood');
      $('#hambutton').removeClass('changepurple').removeClass('changewood');
      $('#container').addClass('changegrey');
      $('#hambutton').addClass('changegrey');
    }
    if ($(this).scrollTop() > genre && $(this).scrollTop() < portfolio) {
      $('#container').removeClass('changegrey').removeClass('changepurple');
      $('#hambutton').removeClass('changegrey').removeClass('changepurple');
      $('#container').addClass('changewood');
      $('#hambutton').addClass('changewood');
    }
    if ($(this).scrollTop() > portfolio) {
      $('#container').removeClass('changepurple').removeClass('changegrey').removeClass('changewood');
      $('#hambutton').removeClass('changepurple').removeClass('changegrey').removeClass('changewood');
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