$(document).ready(() => {

    $('.portfolio-photo img').on('mouseenter', function() {
	    // console.log($(this))
        // debugger
        $(this.nextElementSibling.children[0]).removeClass('box-text-hidden')
    });

    $('.portfolio-photo img').on('mouseleave', function() {
	    // console.log($(this))
        // debugger
        $(this.nextElementSibling.children[0]).addClass('box-text-hidden')
    })

    $('#header-type').typeIt({
     strings: ["Hi, I am Sam.", "I am a Full Stack Developer.", "I am a politics geek.", "NY transplant in LA.", "I love coding."],
     speed: 120,
     breakLines: false,
     autoStart: true,
     lifeLike: true,
     cursor: true,
     deleteSpeed: 40,
     deleteDelay: 1000,
    })

})





//  data-period="2000" data-type='[ "" ]'


//   window.onload = function() {
//         var elements = document.getElementsByClassName('typewrite');
//         for (var i=0; i<elements.length; i++) {
//             var toRotate = elements[i].getAttribute('data-type');
//             var period = elements[i].getAttribute('data-period');
//             if (toRotate) {
//               new TxtType(elements[i], JSON.parse(toRotate), period);
//             }
//         }
//   }


// var TxtType = function(el, toRotate, period) {
        
//         this.toRotate = toRotate;
//         this.el = el;
//         this.loopNum = 0;
//         this.period = parseInt(period, 10) || 2000;
//         this.txt = '';
//         this.tick();
//         this.isDeleting = false;
//     };

//     TxtType.prototype.tick = function() {
//         var i = this.loopNum % this.toRotate.length;
//         var fullTxt = this.toRotate[i];

//         if (this.isDeleting) {
//         this.txt = fullTxt.substring(0, this.txt.length - 1);
//         } else {
//         this.txt = fullTxt.substring(0, this.txt.length + 1);
//         }

//         this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

//         var that = this;
//         var delta = 200 - Math.random() * 100;

//         if (this.isDeleting) { delta /= 2; }

//         if (!this.isDeleting && this.txt === fullTxt) {
//         delta = this.period;
//         this.isDeleting = true;
//         } else if (this.isDeleting && this.txt === '') {
//         this.isDeleting = false;
//         this.loopNum++;
//         delta = 500;
//         }

//         setTimeout(function() {
//         that.tick();
//         }, delta);
//     };