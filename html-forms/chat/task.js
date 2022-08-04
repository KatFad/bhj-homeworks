const chat = document.querySelector('.chat-widget'),
      chatInput = document.getElementById('chat-widget__input'),
      messages = document.querySelector('.chat-widget__messages'),
      messagesContainer = document.querySelector('.chat-widget__messages-container');
let TimerId = 0;


chat.addEventListener('click', function(event) {
    event.stopPropagation();
    chat.classList.add('chat-widget_active')

    if(!messages.childElementCount){
        messages.innerHTML += getMessage('Что ты тут забыл?') // приветствие от бота
    }

    TimerId = setTimeout(()=>messages.innerHTML +=getMessage('Вы еще здесь?') , 30000); // простой 30с
});
// скрываем чат
window.addEventListener('click',function(event){
    event.stopPropagation();
    chat.classList.remove('chat-widget_active');
    clearInterval(TimerId);
})

chatInput.addEventListener('keydown',(event)=> {
    if (event.key === 'Enter' && chatInput.value !== '') {
        messages.innerHTML += getMessage(chatInput.value, true); // сообщение от пользователя
        chatInput.value = '';
        //сразу после сообщения пользователя приходит в чат сообщение от бота
        getRandomBotAnswer();
        clearTimeout(TimerId);
        TimerId = setTimeout(getRandomBotAnswer, 30000);
    }
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
});


// функция для генерации кода сообщений
function getMessage(text, isClient = 0) {
    const now = new Date();
    return `<div class="message${isClient ? ' message_client' : ''}">
                <div class="message__time">${now.getHours() + ':' + now.getMinutes()}</div>
                <div class="message__text">${text} </div>
            </div>`;
}

// функция случайного числа
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

//хранение сообщений бота и выбор рандомного
function getRandomBotAnswer() {
    const botMessages = [
        'Где ваша совесть?',
        'Кто тут?',
        'К сожалению, все операторы сейчас заняты. Не пишите нам больше.',
        'Добрый день! До свидания!',
        'Вы не купили ни одного товара для того, чтобы так с нами разговаривать!',
        'Мы ничего не будем вам продавать!',
        'Google в помощь!',
        '...',
        'Вы ещё здесь?',
    ]
    const botText = botMessages[randomInteger(0, botMessages.length - 1)]
    return  messages.innerHTML +=getMessage(botText)
}

