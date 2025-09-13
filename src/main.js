import { getTasks, addTask, removeTask } from './js/tasks.js';
import { renderTasks } from './js/render-tasks.js';
import refs from './js/refs.js';
import { setThemeClass } from './js/theme-switcher.js';

/*
  Створи список справ.
  На сторінці є два інпути які має вводиться назва і текст задачі.
  Після натискання на кнопку "Add" завдання додається до списку #task-list.

  У кожної картки має бути кнопка "Delete", щоб можна було
  прибрати завдання зі списку.
  Список із завданнями має бути доступним після перезавантаження сторінки.

  Розмітка картки задачі
  <li class="task-list-item">
      <button class="task-list-item-btn">Delete</button>
      <h3>Заголовок</h3>
      <p>Текст</p>
  </li>
*/

setThemeClass();
renderTasks(getTasks());

refs.form.addEventListener('submit', e => {
  e.preventDefault();

  const form = e.target;

  const name = form.elements['taskName'].value;
  const description = form.elements['taskDescription'].value;

  if (
    !form.elements['taskName'].value ||
    !form.elements['taskDescription'].value
  ) {
    alert('Please fill out task form');
    return;
  }

  addTask(name, description);
  renderTasks(getTasks());

  form.reset();
});

refs.tasksListEl.addEventListener('click', e => {
  if (!e.target.classList.contains('task-list-item-btn')) {
    return;
  }

  const taskLiEl = e.target.closest('.task-list-item');
  removeTask(taskLiEl.dataset.id);

  renderTasks(getTasks());
});
