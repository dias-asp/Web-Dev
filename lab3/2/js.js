const todoInput = document.getElementById('input-text');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('list');


addButton.addEventListener('click', () => {
    const taskText = todoInput.value.trim(); // Убираем лишние пробелы
    if (taskText === '') {
        return;
    }

    // Создаем элемент <li>
    const newTask = document.createElement('li');

    // Добавляем текст задачи
    newTask.innerHTML = `
    <div class="item">
      <input type="checkbox" class="done">
    <span>${taskText}</span>
      <button class="delete-button"><img src="img.png"></button>
    </div>
  `;

    // Добавляем задачу в список
    todoList.appendChild(newTask);

    // Очищаем поле ввода
    todoInput.value = '';

    // Обновляем функциональность задач
    updateTaskActions();
});


// Функция для обновления действий по задачам
function updateTaskActions() {
    // Обработка отметки "сделано"
    const checkboxes = todoList.querySelectorAll('.done');
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', (e) => {
            const task = e.target.closest('li');
            task.classList.toggle('done', e.target.checked);
        });
    });

    // Удаление задачи
    const deleteButtons = todoList.querySelectorAll('.delete-button');
    deleteButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            const task = e.target.closest('li');
            task.remove();
        });
    });
}

// Начальная инициализация
updateTaskActions();
