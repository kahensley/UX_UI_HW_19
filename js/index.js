console.log("Your index.js file is loaded correctly!");

$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 90) {
      $('.skiptoResume').fadeIn();
    } else {
      $('.skiptoResume').fadeOut();
    }
});
