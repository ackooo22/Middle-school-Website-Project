const sliderElm = document.querySelector("slider");
const btnLeft = sliderElm.querySelector("left");
const btnRight = sliderElm.querySelector("right");
var sliderContainer = document.querySelector("slide-container");

const numberSliderBoxs = sliderElm.children.length;
let idCurrentSlide = 0;

function moveSlider(){
    let leftMargin = (sliderElm.clientWidth / numberSliderBoxs) * idCurrentSlide; 
    sliderElm.style.marginLeft = -leftMargin + "px"; 

    for (let i = 0; i < sliderContainer.length; i++) {

    }
}

function moveLeft(){
    if (idCurrentSlide === 0) idCurrentSlide = numberSliderBoxs - 1; 
    else idCurrentSlide--; 

    moveSlider();
}
function moveRight(){
    if (idCurrentSlide === numberSliderBoxs - 1) idCurrentSlide = 0;
    else idCurrentSlide++;

    moveSlider();
}

btnLeft.addEventListener("click", moveLeft);
btnRight.addEventListener("click", moveRight);

