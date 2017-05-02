$(document).ready(() => {

    $('.portfolio-photo img').hover(function() {
	    // console.log($(this))
        // debugger
        $(this.nextElementSibling.children[0]).removeClass('box-text-hidden')
    });

    $('.portfolio-photo img').on('mouseleave', function() {
	    // console.log($(this))
        // debugger
        $(this.nextElementSibling.children[0]).addClass('box-text-hidden')
    
    })


})