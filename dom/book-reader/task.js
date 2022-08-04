const bookControls = Array.from(document.querySelectorAll('.font-size')),
      ControlColor = Array.from(document.querySelector('.book__control_color').querySelectorAll('.color'))
      ControlBackground = Array.from(document.querySelector('.book__control_background').querySelectorAll('.color'))

const book = document.querySelector('.book');

bookControls.forEach(elem => {
    elem.addEventListener('click',fontSize);
});

ControlColor.forEach(elem => {
    elem.addEventListener('click',bookControlColor);
});

ControlBackground.forEach(elem => {
    elem.addEventListener('click',bookControlBackground);
});

function fontSize(event) {
    event.preventDefault();

    document.querySelector('.font-size_active').classList.remove('font-size_active');
    this.classList.add('font-size_active');

    book.classList.remove('book_fs-small', 'book_fs-big')
    book.classList.add('book_fs-' + this.dataset.size);
    
}

function bookControlColor(event) {
    event.preventDefault();

    document.querySelector('.color_active').classList.remove('color_active');
    this.classList.add('color_active');

    book.classList.remove('book_color-gray', 'book_color-whitesmoke', 'book_color-black')
    book.classList.add('book_color-' + this.dataset.textColor);

}

function bookControlBackground(event)  {
    event.preventDefault();

    document.querySelector('.color_active').classList.remove('color_active');
    this.classList.add('color_active');

    book.classList.remove('book_bg-gray', 'book_bg-white', 'book_bg-black')
    book.classList.add('book_bg-' + this.dataset.bgColor);

}

