$(function() {
  $(".coupon").hover(
    function(event){
      var coupon_id = $(this).data('id');
      if (typeof coupon_id != 'undefined') {
        $(this).prepend('<span class="identify-display" style="position: absolute; left:' + event.pageX + '; top:' + event.pageY + ';">coupon_id ' + coupon_id + '</span>');
        $(this).addClass('identify-coupon');
      }
    }, function() {
      var coupon_id = $(this).data('id');
      if (typeof coupon_id != 'undefined') {
        $(this).children().first().remove();
        $(this).removeClass('identify-coupon');
      }
    }
  );
});
