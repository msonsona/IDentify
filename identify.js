$(function() {
  $(".coupon").hover(
    function(){
      var coupon_id = $(this).data('id');
      if (typeof coupon_id != 'undefined') {
        $(this).prepend('<span class="identify-display">coupon_id ' + coupon_id + '</span>');
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
