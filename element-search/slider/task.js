const sliders = Array.from(document.querySelectorAll('.slider__item')),
    arrows = Array.from(document.querySelectorAll('.slider__arrow')),
    dots = Array.from(document.querySelectorAll('.slider__dot'));
let sliderNum = 0;

function slider(num) {
    sliders.forEach(element => element.classList.remove('slider__item_active'));
    sliders[num].classList.add('slider__item_active');
    sliders.forEach(element => element.classList.remove('slider__dot_active'));
    sliders[num].classList.add('slider__dot_active');
    sliderNum = num;
}

for (let item of arrows) {
    item.onclick = sliderArrow;
}

for (let item of dots) {
    item.onclick = sliderDots;
}

function sliderArrow() {
    if (this.classList.contains('slider__arrow_next')) {
        sliderNum === (sliders.length - 1) ? slider(0) : slider(sliderNum + 1);
    }
    if (this.classList.contains('slider__arrow_prev')) {
        sliderNum === 0 ? slider(sliders.length - 1) : slider(sliderNum - 1);
    }
}

function sliderDots() {
    slider(dots.indexOf(this));
}

