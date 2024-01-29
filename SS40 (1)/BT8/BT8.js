document.addEventListener('DOMContentLoaded', () => {
    const addTaskForm = document.getElementById('addTaskForm');
    const newTaskInput = document.getElementById('newTaskInput');
    const taskList = document.getElementById('taskList');

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.classList.add('task-item');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', () => {
            task.completed = checkbox.checked;
            saveTasks();
        });

        li.appendChild(checkbox);

        const span = document.createElement('span');
        span.textContent = task.text;
        span.classList.add('task-text');
        if (task.completed) {
            span.classList.add('completed');
        }
        li.appendChild(span);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.textContent = 'X';
        deleteButton.addEventListener('click', () => {
            tasks = tasks.filter(t => t !== task);
            saveTasks();
            li.remove();
        });
        li.appendChild(deleteButton);

        taskList.appendChild(li);
    });

    addTaskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!newTaskInput.value.trim()) return;

        const task = {
            text: newTaskInput.value.trim(),
            completed: false,
        };

        tasks.push(task);
        saveTasks();

        const li = document.createElement('li');
        li.classList.add('task-item');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', () => {
            task.completed = checkbox.checked;
            saveTasks();
        });

        li.appendChild(checkbox);

        const span = document.createElement('span');
        span.textContent = task.text;
        span.classList.add('task-text');
        if (task.completed) {
            span.classList.add('completed');
        }
        li.appendChild(span);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.textContent = 'X';
        deleteButton.addEventListener('click', () => {
            tasks = tasks.filter(t => t !== task);
            saveTasks();
            li.remove();
        });
        li.appendChild(deleteButton);

        taskList.appendChild(li);

        newTaskInput.value = '';
    });
});