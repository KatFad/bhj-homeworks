const checkBox = Array.from(document.querySelectorAll('.interest__check'));


for (let item of checkBox) {
    item.addEventListener('change', () => {
        checkChildren(item);
        checkParent(item);
    })
}

// смена checked для всех детей
    function checkChildren(element) {
        const childArr = Array.from(element.closest('li').querySelectorAll('input'));
        childArr.forEach((e) => {
            e.checked = element.checked;
            e.indeterminate = false;
        });
    }

// смена checked для родителей
function checkParent(element) {
    const siblings = Array.from(element.closest('ul').querySelectorAll('input')),
          eClosest = element.closest('ul').closest('li');

    if (eClosest) {
        const parentCheck = eClosest.querySelector('input');

        if (siblings.every(sibling => sibling.checked)) {
            parentCheck.checked = true;
            parentCheck.indeterminate = false;
        } else if (siblings.some(sibling => sibling.checked)) {
            parentCheck.checked = false;
            parentCheck.indeterminate = true;
        } else {
            parentCheck.checked = false;
            parentCheck.indeterminate = false;
        }
        checkParent(parentCheck);

    }
}

