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

  $.ajax({
    type: 'POST',
    url: '/medium/code=8798598aad9&client_id=330b71016c24&client_secret=e2aed88ad08781d397e4b6c67f8ee1ab6824f2e3&grant_type=authorization_code&redirect_uri=http://rafaelmelon.es/medium',
    dataType: 'text',
    contentType: 'application/json',
    success: function (response) {
      console.log(response)
    },
    error: function (error) {
      console.log(error)
    }
  })
})
