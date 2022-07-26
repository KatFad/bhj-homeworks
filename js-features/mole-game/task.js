const getHole = index => document.getElementById(`hole${index}`),
      dead = document.getElementById('dead'),
      lost = document.getElementById('lost');

for(let i=1; i<10; i++) {
    getHole(i).onclick = kill;
}

function kill() {
    if (this.classList.contains('hole_has-mole')) {
        dead.textContent++;

        if(dead.textContent == 10) {
            alert('Победа');
            dead.textContent=0; lost.textContent=0;
        }

        return dead.textContent
    }
    else {
        lost.textContent++;

        if(lost.textContent == 5) {
            alert('Проигрыш');
            dead.textContent=0; lost.textContent=0;
        }

        return lost.textContent
    }



}
