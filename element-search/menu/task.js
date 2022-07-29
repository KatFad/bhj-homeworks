/*
document.querySelector('body').innerHTML = document.querySelector('body').innerHTML
    +'<ul class="menu menu_main" style="margin-top: 100px">'
    + document.querySelector('.menu').innerHTML + '</ul>';

*/
const menuArray = Array.from(document.querySelectorAll('.menu__link'))

for(let item of menuArray) {
    let menuParent = item.closest('.menu__item').querySelector('.menu_sub')
        ,menuActive =item.closest('.menu_main').querySelectorAll('.menu_sub')

    item.onclick = () => {

        if (menuParent) {

            !menuParent.classList.contains('menu_active') ? (menuActive.forEach((element) => element.classList.remove('menu_active')),menuParent.classList.toggle('menu_active')) : menuParent.classList.remove('menu_active')
           /* if(!menuParent.classList.contains('menu_active')) {
                menuActive.forEach((element) => element.classList.remove('menu_active'))
                menuParent.classList.toggle('menu_active')
            }
            else {
                menuParent.classList.remove('menu_active')
            }*/
            return false
        }


}

}


