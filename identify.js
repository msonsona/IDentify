$(function() {
  $(".coupon").hover(
    function(){
      var coupon_id = $(this).data('id');
      if (typeof coupon_id != 'undefined') {
        $(this).prepend('<span style="background: #66c13a; position: fixed; bottom: 0; right: 0; z-index: 10000000;">coupon_id ' + coupon_id + '</span>');
        $(this).css("border", "1px #66c13a solid");
      }
    }, function() {
      var coupon_id = $(this).data('id');
      if (typeof coupon_id != 'undefined') {
        $(this).children().first().remove();
        $(this).css("border", "");
      }
    }
  );
});
