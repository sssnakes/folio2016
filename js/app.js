$(document).ready(function() {

  // $divs.customScrollbar();
  // $('#left-block').customScrollbar();

  var $divs = $('#right-block, #left-block');
  var sync = function(e){
      var $other = $divs.not(this).off('scroll'), other = $other.get(0);
      var percentage = this.scrollTop / (this.scrollHeight - this.offsetHeight);
      other.scrollTop = percentage * (other.scrollHeight - other.offsetHeight);
      // setTimeout( function(){ $other.on('scroll', sync ); }, 10);
      // $other.on('scroll', sync );
  }
  $divs.on( 'scroll', sync);

  // $(window).focus(function() {
  //   $('.tabber-image').fadeOut(500);
  // });
  //
  // $(window).blur(function() {
  //   $('.tabber-image').fadeIn(200);
  // });

});
