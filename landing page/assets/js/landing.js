// Slider section for the smaller cards

const sliderElm = document.querySelector(".slider");
const slides = Array.from(sliderElm.children);
const nextBtn = document.querySelector("#right");
const prevBtn = document.querySelector("#left");

const slideWidth = slides[0].getBoundingClientRect().width;
console.log(slideWidth)

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + "px";

}

slides.forEach(setSlidePosition);

const moveToSlide = (sliderElm, currentSlide, targetSlide ) => {
    sliderElm.style.transform = `translateX(-` + targetSlide.style.left + `)`
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
}

// Next button

nextBtn.addEventListener("click", e => {
    const currentSlide = sliderElm.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling;
    // Move to the next slide
     
    moveToSlide(sliderElm, currentSlide, nextSlide)

});

prevBtn.addEventListener("click", e => {
    const currentSlide = sliderElm.querySelector(".current-slide");
    const prevSlide = currentSlide.previousElementSibling;

    moveToSlide(sliderElm, currentSlide, prevSlide)
})


// Start of the bigger slider cards

const sliderTwo = document.querySelector(".big-cards");
const sliderTwoImg = Array.from(sliderTwo.children);
const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");

const sliderTwoWidth = sliderTwo.getBoundingClientRect().width;

const sliderTwoPositions = (slide, index) => {
    slide.style.left = sliderTwoWidth * index + "px";
}

sliderTwoImg.forEach(sliderTwoPositions);


const moveToNextImg = (sliderTwo, currentSlide, targetSlide) => {
    sliderTwo.style.transform = `translateX(-` + targetSlide.style.left + `)`
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
}

btnNext.addEventListener("click", e => {
    const currentSlide = sliderTwo.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling;

    moveToNextImg(sliderTwo, currentSlide, nextSlide);
})


btnPrev.addEventListener("click", e => {
    const currentSlide = sliderTwo.querySelector(".current-slide");
    const prevSlide = currentSlide.previousElementSibling;

    moveToNextImg(sliderTwo, currentSlide, prevSlide);
})



    