$(function() {
  $('.clickable').click(function() {
    $('.walrus-hidden').slideToggle(1000);
    $('.walrus-showing').slideToggle(1000);

  });
$('button#black').click(function() {
  $('body').removeClass();
  $('body').addClass('black-background');
  $('#black').hide();
  $('#white').show();
});

  $('button#white').click(function(){
    $('body').removeClass('black-background');
    $('#white').hide();
    $('#black').show();
  });
});
