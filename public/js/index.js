$(document).ready(function() {
  $('.carousel_img').height('500px'); // set height to be exactly 500px

  // click login with email
  $('#login_withemail_modal_submitbutton').click(function() {
    var email = $('#login_withemail_modal_email').text();
    var password = $('#login_withemail_modal_password').text();
    $.ajax({
      url: '/login',
      type: 'POST',
      data: {'email': email, 'password': password},
      success: function(data) {
        console.log("login with email error");
        console.log(data);
        var flashwrapper = $('#login_withemail_modal_flashwrapper');
        flashwrapper.empty();
        if(data.loginMessage.length > 0) {
          flashwrapper.prepend("<div class=\"alert alert-danger\"></div>");  
          flash = flashwrapper.children('.alert');
          data.loginMessage.forEach(function(i) {
            flash.append(i);
          })
        } // end if
      } // end success
    }); // end ajax
  }); // end click login with email
});// end document ready