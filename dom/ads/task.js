/*
const content = document.querySelector('.content');
const card = document.querySelector('.card');
content.innerHTML = content.innerHTML + '<div class="card">' + card.innerHTML + '</div>';
content.innerHTML = content.innerHTML + '<div class="card">' + card.innerHTML + '</div>';
content.innerHTML = content.innerHTML + '<div class="card">' + card.innerHTML + '</div>';
*/

const rotatorCases = Array.from(document.querySelectorAll('.rotator__case'));
let speed = 1000, num=0;


function ads(num) {
    rotatorCases[num].style.color = rotatorCases[num].dataset.color;
    speed = rotatorCases[num].dataset.speed
}

setInterval(()=>{
    rotatorCases[num].classList.remove('rotator__case_active')
    num = (num >= rotatorCases.length - 1) ? 0 : ++num;
    rotatorCases[num].classList.toggle('rotator__case_active')
    ads(num)
}, speed);

