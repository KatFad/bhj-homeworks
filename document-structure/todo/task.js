const taskInput = document.getElementById('task__input');
const tasksAdd = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');
let localArr = [];

returnLocalStorage(); //Вытягиваем из localSatorage значения и выводим на странице

tasksAdd.addEventListener('click', (e) => {
    e.preventDefault();

    taskInput.value = taskInput.value.trim();

    if (taskInput.value !== '') {
        localArr.push(taskInput.value); //Добавляем значение в массив
        setLocalStorage(); //Отправляем массив в localSatorage

        createTask(taskInput.value);
        taskInput.value = '';
    }

    const taskRemove = document.querySelector('.task__remove');

    taskRemove.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(e)
        taskRemove.parentElement.remove();

    })
});

//Берем данные из localStorage и выводим на страницу
function returnLocalStorage() {
    if (localStorage.getItem('tasks')) {
        localArr = JSON.parse(localStorage.getItem('tasks'));

        localArr.forEach(item => {
            createTask(item);
        });
    };
};


tasksList.addEventListener('click', (e)=>{
    if (e.target.className === 'task__remove') {
        e.preventDefault();
        const removeValue = e.target.previousElementSibling.innerText;
        removeStorageTask(removeValue); //Работаем с localStorage
        e.target.parentNode.remove();

    }
});

function removeStorageTask(removeValue) {
    const removeItem = localArr.indexOf(removeValue);
    localArr.splice(removeItem, 1);
    setLocalStorage();

    //Удаление массива из localSatorage, если задач не остается
    if(localStorage.getItem('tasks') === '[]') {
        localStorage.removeItem('tasks');
    };
};


function createTask(text) {
    tasksList.insertAdjacentHTML('beforeend', `<div class="task"><div class="task__title">${text}</div><a href="#" class="task__remove">&times;</a></div>`);
}

//Отправка объекта в хранилище
function setLocalStorage() {
    const localStorageTasks = JSON.stringify(localArr);
    localStorage.setItem('tasks', localStorageTasks);
};


