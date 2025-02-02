const INTERVAL = 3000;
let currentSlide = 0;

function nextSlide(){
    const  slidesElement = document.querySelector('.slides');
    slidesElement.childNodes[currentSlide].classList.remove('active');

    currentSlide++;

    slidesElement.childNodes[currentSlide].classList.add('active');
}

setInterval(nextSlide, INTERVAL);