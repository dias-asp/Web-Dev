// Находим элементы интерфейса
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Функция добавления новой задачи
addButton.addEventListener('click', () => {
    const taskText = todoInput.value.trim(); // Убираем лишние пробелы
    if (taskText === '') {
        alert('Пожалуйста, введите задачу!');
        return;
    }

    // Создаем элемент <li>
    const newTask = document.createElement('li');

    // Добавляем текст задачи
    newTask.innerHTML = `
    <span>${taskText}</span>
    <div>
      <input type="checkbox" class="done-checkbox">
      <button class="delete-btn">Удалить</button>
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
    const checkboxes = todoList.querySelectorAll('.done-checkbox');
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', (e) => {
            const task = e.target.closest('li');
            task.classList.toggle('done', e.target.checked);
        });
    });

    // Удаление задачи
    const deleteButtons = todoList.querySelectorAll('.delete-btn');
    deleteButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            const task = e.target.closest('li');
            task.remove();
        });
    });
}

// Начальная инициализация
updateTaskActions();