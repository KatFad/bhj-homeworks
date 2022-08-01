//Сделайте акцент на том, что таких механизмов переключения может быть несколько на странице
/*document.querySelector('.tabs').innerHTML = document.querySelector('.tabs').innerHTML
    +'<div class="tab__navigation" style="margin-top: 100px">'
    + document.querySelector('.tab__navigation').innerHTML + '</div>';

document.querySelector('.tabs').innerHTML = document.querySelector('.tabs').innerHTML
    +'<div class="tab__contents" >'
    + document.querySelector('.tab__contents').innerHTML + '</div>';*/

const tabs = Array.from(document.querySelectorAll('.tab')),
    tabContent = Array.from(document.querySelectorAll('.tab__content'));


for (let item of tabs) {
    item.onclick = tabActive;
}

function tabActive() {
    tabs.forEach((element) => element.classList.remove('tab_active'));
    tabContent.forEach((element) => element.classList.remove('tab__content_active'));
    this.classList.add('tab_active');
    tabContent[tabs.indexOf(this)].classList.add('tab__content_active');
}




