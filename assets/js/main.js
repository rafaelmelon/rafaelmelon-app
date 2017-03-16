$(document).ready(function() {

  $('.countdown').countdown('2017/03/03', function(event) {
    $(this).html(event.strftime('<h3><span>%w</span> semanas, <span>%d</span> días y <span>%M:%H:%S</span></h3>'));
  });

  $('#web-contact').validator().on('submit', function (e) {
    if (e.isDefaultPrevented()) {

    } else {

    }
  });

});
