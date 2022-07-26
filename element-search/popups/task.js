const modalActive = document.getElementById('modal_main'),
      modalClose = Array.from(document.querySelectorAll('.modal__close')),
      showSuccess = document.querySelector('.show-success');
      modalSuccess =  document.getElementById('modal_success')

modalActive.className += ' modal_active';

      for(let item of modalClose) {
          item.onclick = function() {
              modalActive.className = 'modal'
              modalSuccess.className = 'modal'
          }
      }

showSuccess.onclick = () => {
    modalSuccess.className += ' modal_active'
}