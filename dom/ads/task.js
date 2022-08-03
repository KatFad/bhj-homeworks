const rotatorCases = Array.from(document.querySelectorAll('.rotator__case'));
let speed = 1000;

function ads() {
    const nextRotatorCase = document.querySelector('.rotator__case_active').nextElementSibling;
    let activeCaseIndex = rotatorCases.findIndex((item) => item.classList.contains('rotator__case_active'));

    rotatorCases.forEach((element) => {
        element.classList.remove('rotator__case_active')
        element.style.color = element.dataset.color;
        speed = element.dataset.speed
    });

    (activeCaseIndex === rotatorCases.length - 1) ? rotatorCases[0].classList.add('rotator__case_active') : nextRotatorCase.classList.add('rotator__case_active');

}

setInterval(ads, speed);



