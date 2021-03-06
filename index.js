'use strict';

$(function() {
  $(window).scroll(function () {
    const hgt = $('#container').height();
    const plantry = $('#project1').offset().top - hgt;
    const training = $('#project2').offset().top - hgt;
    const genre = $('#project3').offset().top - hgt;
    const portfolio = $('#project4').offset().top - hgt;

    if ($(this).scrollTop() < plantry) {
      $('#container, #hambutton').removeClass('changepurple changegrey changewood');
    }
    if ($(this).scrollTop() > plantry && $(this).scrollTop() < training) {
      $('#container, #hambutton').removeClass('changegrey changewood').addClass('changepurple');
    } 
    if ($(this).scrollTop() > training && $(this).scrollTop() < genre) {
      $('#container, #hambutton').removeClass('changepurple changewood').addClass('changegrey');
    }
    if ($(this).scrollTop() > genre && $(this).scrollTop() < portfolio) {
      $('#container, #hambutton').removeClass('changegrey changepurple').addClass('changewood');
    }
    if ($(this).scrollTop() > portfolio) {
      $('#container, #hambutton').removeClass('changepurple changegrey changewood');
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