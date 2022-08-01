const dropdownValue = Array.from(document.querySelectorAll('.dropdown__value')),
    dropdownItem = Array.from(document.querySelectorAll('.dropdown__item'))

for (let item of dropdownValue) {
   item.onclick = dropdown
}

function dropdown() {
    this.closest('.dropdown').querySelector('.dropdown__list').classList.toggle('dropdown__list_active');
    return false
}

for (let item of dropdownItem) {
    item.onclick = dropItem
}

function dropItem() {
    this.closest('.dropdown__list').closest('.dropdown').querySelector('.dropdown__value').textContent = this.textContent;
    this.closest('.dropdown').querySelector('.dropdown__list').classList.remove('dropdown__list_active');
    return false
}
