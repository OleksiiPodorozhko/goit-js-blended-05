import refs from './refs.js';

export function renderTasks(tasks) {
  refs.tasksListEl.innerHTML = tasks.map(taskObj =>
    `<li data-id = ${taskObj.id} class="task-list-item">
        <button class="task-list-item-btn">Delete</button>
        <h3>${taskObj.title}</h3>
        <p>${taskObj.description}</p>
      </li>`
  ).join('');
}