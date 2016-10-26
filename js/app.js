$(document).ready(function() {

  $('.marquee').marquee({
      //speed in milliseconds of the marquee
      duration: 40000,
      delayBeforeStart: 0,
      direction: 'left',
      duplicated: true,
      startVisible: true
  });

  $('.marquee-small').marquee({
      duration: 20000,
      delayBeforeStart: 0,
      direction: 'left',
      duplicated: true,
      startVisible: true
  });

  $('.list-item').mouseenter(function(){
    var dat = $(this).data('target');
    var hid = $(this).data('hide');
    $('.marq').html("<div class='marq bag'>" + dat + "</div>");

    if (hid == "y"){
      $('.marquee-small').css('visibility', 'visible');
    } else {
      $('.marquee-small').css('visibility', 'hidden');
    }

  });

});
