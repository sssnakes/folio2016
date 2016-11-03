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

  // $('#left-block').scroll(function(){
  //
  //   var wH = $(window).height(),
  //       tA = ($('#left-box').height() - wH) / 100,
  //       sA = (-($('#left-box').offset().top)) / tA;
  //       tB = ($('.image-list').height() - wH) / 100,
  //       sB = (-($('.image-list').offset().top)) / tB;
  //
  //   $('.image-list').animate({
  //     scrollTop: +10
  //   }, 10);
  //
  // });

  var $divs = $('#left-block, #right-block');
  var sync = function(e){
      var $other = $divs.not(this).off('scroll'), other = $other.get(0);
      var percentage = this.scrollTop / (this.scrollHeight - this.offsetHeight);
      other.scrollTop = percentage * (other.scrollHeight - other.offsetHeight);
      setTimeout( function(){ $other.on('scroll', sync ); },1);
  }
  $divs.on( 'scroll', sync);


});
