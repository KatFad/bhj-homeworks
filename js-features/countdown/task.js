const  timer = document.getElementById('timer');
let tic = Number(timer.textContent);


const func = setInterval(() => {
    /*let hh = Math.floor(tic/3600); //Реализуйте таймер, отсчитывающий оставшееся время в формате hh:mm:ss
    let mm = Math.floor(tic % 3600/60); //Реализуйте таймер, отсчитывающий оставшееся время в формате hh:mm:ss
    let ss = tic % 60; //Реализуйте таймер, отсчитывающий оставшееся время в формате hh:mm:ss
    if (ss < 10) {
        ss = '0' + ss;
    };

    if (mm < 10) {
        mm = '0' + mm;
    };

    if (hh < 10) {
        hh = '0' + hh;
    };*/

    tic--;
    if (tic === 0) {
        alert('Вы победили в конкурсе!');
        clearInterval(func);
        location = '7kfm.zip'; //По окончании отсчёта времени, запустите загрузку произвольного файла
    }
   //return  timer.textContent =`${hh}:${mm}:${ss}` //Реализуйте таймер, отсчитывающий оставшееся время в формате hh:mm:ss
    return timer.textContent = tic
},1000);

