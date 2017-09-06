$(document).ready(function() {

  $('.countdown').countdown('2017/12/31', function(event) {
    $(this).html(event.strftime('<h3 class="h3"><span>%w</span>W · <span>%d</span>D · <span>%M:%H:%S</span>H</h3>'))
  })

  $('#web-contact').validator().on('submit', function (e) {
    if (e.isDefaultPrevented()) {

    } else {

    }
  })

  // Medium Auth
  $.ajax({
    method: 'GET',
    url: '/medium',
    success: function (response) {
      console.log(response)
    },
    error: function (error) {
      console.log(error)
    }
  })
})
