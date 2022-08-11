console.log("Your index.js file is loaded correctly!");

$(window).scroll(function() {
    if ($(this).scrollTop()>40)
     {
        $('.hiddenOnLoad').show(1000);
        $('.skiptoResume').show(1000);
     }
    
 });
