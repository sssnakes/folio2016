$(document).ready(function() {

  // $divs.customScrollbar();
  $('#left-block').customScrollbar();

  var $divs = $('#left-block, #right-block');
  var sync = function(e){
      var $other = $divs.not(this).off('scroll'), other = $other.get(0);
      var percentage = this.scrollTop / (this.scrollHeight - this.offsetHeight);
      other.scrollTop = percentage * (other.scrollHeight - other.offsetHeight);
  }
  $divs.on( 'scroll', sync);

});
