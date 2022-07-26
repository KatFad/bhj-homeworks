const cookie = document.getElementById('cookie');
const clicker = document.querySelector('.clicker__cookie');
const count = document.getElementById('clicker__counter');
let countClick = Number(count.textContent);

const speed = document.createElement('div')
speed.className = 'clicker__status__speed'
speed.innerHTML = 'Скорость клика <span id=\'clicker__speed\'>0</span>';
clicker.before(speed)

const countSpeed = document.getElementById('clicker__speed');
let speedStart = Number(countSpeed.textContent);

cookie.onclick = function () {
    cookie.width = countClick % 2 ? 180 : 200;
    countClick++;

    countSpeed.textContent  = (1 / ((Date.now() - speedStart)/1000)).toFixed(2);
    speedStart = Date.now();
    return (count.textContent = countClick, countSpeed.textContent)
}

