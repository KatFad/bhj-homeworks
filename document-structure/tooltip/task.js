const hasTool = Array.from(document.querySelectorAll('.has-tooltip'));

function createTooltip(title) {
    const toolTip = document.createElement('div');
    toolTip.className = 'tooltip';
    toolTip.textContent = title;
    toolTip.setAttribute('data-position', 'bottom'); // Задаем атрибут data-position на выбор 'right','left','bottom','top'
    return toolTip;
};

    hasTool.forEach((item) =>{
        item.after(createTooltip(item.title));

        item.addEventListener('click',(e)=> {
            e.preventDefault();
            if (!item.nextElementSibling.classList.contains('tooltip_active')) {
                [...document.querySelectorAll('.tooltip')].forEach((element) => element.classList.remove('tooltip_active'));
                item.nextElementSibling.classList.toggle('tooltip_active')

            } else {
                item.nextElementSibling.classList.remove('tooltip_active')
            }
            position(item, item.nextElementSibling);
            console.log( item)

        })
    });


function position(hasTools, tooltip) {
    const pHasTools = hasTools.getBoundingClientRect();
    const pTooltip = tooltip.getBoundingClientRect();
    const attr = tooltip.getAttribute('data-position');

    if (attr === 'top' && pHasTools.top >= pTooltip.height) {
        tooltip.style = `left: ${pHasTools.left}px; top: ${pHasTools.top - pTooltip.height}px`;
    } else if (attr === 'left' && pHasTools.left >= pTooltip.width) {
        tooltip.style = `left: ${pHasTools.left - pTooltip.width}px; top: ${pHasTools.top}px`;
    } else if (attr === 'right') {
        tooltip.style = `left: ${pHasTools.left + pHasTools.width}px; top: ${pHasTools.top}px`;
    } else {
        tooltip.style = `left: ${pHasTools.left}px; top: ${pHasTools.bottom}px`;
    }
};

