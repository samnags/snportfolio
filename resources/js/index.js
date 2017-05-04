$(document).ready(() => {

    $('#header-type').typeIt({
     strings: ["Hi, my name is Sam.", "I am a Full Stack Developer.", "I am a politics geek.", "NY transplant in LA.", "I love coding."],
     speed: 120,
     breakLines: false,
     autoStart: true,
     lifeLike: true,
     cursor: true,
     deleteSpeed: 40,
     deleteDelay: 1000,
     callback: function() {        
        $('.directions').removeClass('icon-hidden')        
        }
    })

    $.localScroll();


})
