/*Global variables */
var currentSlide = 0;
var slides = document.querySelectorAll('.slide');
var slideInterval = setInterval(nextSlide, 3000);
var overlay = document.querySelector('.overlay');
var timesTransitioned = 0;
// clearInterval(slideInterval);
/*On page load */

document.onload = initialize();

console.log(overlay);

/*Functions*/
function initialize() {
    slides[currentSlide].style.zIndex = 1;
}


function nextSlide() {

    overlay.classList.add('hide');

    setTimeout(slideTransition, 300);
    
    setTimeout( function() {
        overlay.classList.remove('hide'); 
    }, 300);


}

function slideTransition() {
    
    currentSlide++;
    timesTransitioned++;

    // if (currentSlide >= slides.length) {
    //     currentSlide = 0;
    // }

    currentSlide = currentSlide % slides.length;

    // if(timesTransitioned >= 10) {
    //     clearInterval(slideInterval);
    // }

    for(var i = 0; i < slides.length; i++) {
        if(i == currentSlide) {
            slides[i].style.zIndex = 1;
        } 
        else {
            slides[i].style.zIndex = 0;
        }
    }


}
