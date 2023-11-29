$(document).ready(function(){
    // Smooth scroll
    $(".click-scroll").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, 'easeInOutExpo'); // Adjust the animation speed and easing if needed
        }
    });
});