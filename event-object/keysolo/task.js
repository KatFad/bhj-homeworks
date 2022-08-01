let status = document.querySelector('.status');
status.innerHTML +='<p> Таймер: <span class=\'status__timer\'>0</span></p>';

class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.timerElement = container.querySelector('.status__timer'); // повышенный уровень задачи
    this.reset();
    this.registerEvents();
  }
  // повышенный уровень задачи

  timer(wordLength){
    let count = wordLength;
    this.timerInterval = setInterval(() => {
      count -= 1;
      this.timerElement.textContent = count;

      if (count <= 0) {
        this.fail();
      }
    }, 1000);

    return this.timerElement.textContent = count
  }

  //

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
    document.addEventListener('keydown',(event)=> {
      this.currentSymbol.textContent === event.key ? this.success() : this.fail()
    });
  }

  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    clearInterval(this.timerInterval); // повышенный уровень задачи
    this.timer(word.length); // повышенный уровень задачи

    this.renderWord(word);
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }

}

new Game(document.getElementById('game'))

