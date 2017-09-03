$(document).ready(function() {

  $('.countdown').countdown('2017/12/31', function(event) {
    $(this).html(event.strftime('<h3 class="h3"><span>%w</span>W · <span>%d</span>D · <span>%M:%H:%S</span>H</h3>'));
  });

  $('#web-contact').validator().on('submit', function (e) {
    if (e.isDefaultPrevented()) {

    } else {

    }
  });

});
