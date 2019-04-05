'use strict';

$(function() {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50 && $(this).scrollTop() < 1000) {
      $('#projects').addClass('changePurple');
    } 
    if ($(this).scrollTop() > 950 && $(this).scrollTop() < 1530) {
      $('#projects').removeClass('changePurple');
      $('#projects').addClass('changeGrey');
    }
    if ($(this).scrollTop() > 1500) {
      $('#projects').removeClass('changeGrey');
      $('#project2').addClass('changeWood');
      $('#projects').addClass('changeWood');
    }
    if ($(this).scrollTop() < 50) {
      $('#projects').removeClass('changePurple');
    }
    if ($(this).scrollTop() > 50 && $(this).scrollTop() < 950) {
      $('#projects').removeClass('changeGrey');
      $('#projects').addClass('changePurple');
    }
    if ($(this).scrollTop() > 950 && $(this).scrollTop() < 1530) {
      $('#projects').removeClass('changeWood');
      $('#project2').removeClass('changeWood');
      $('#projects').addClass('changeGrey');
    }
  });
});