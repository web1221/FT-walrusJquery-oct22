$(document).ready(function() {
  $('.clickable1').click(function(){
    $('.hidden1').slideToggle(1000);
    $('.showing1').slideToggle(1000);
  });

  $('.clickable2').click(function() {
    $('.hidden2').fadeToggle(1000);
    $('.showing2').fadeToggle(1000);
  });

  $('.clickable3').click(function() {
    $('.hidden3').toggle(1000);
    $('.showing3').toggle(1000);
  })
});
