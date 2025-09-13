const refs = {
  form: document.querySelector('.header-form'),
  taskNameInput: document.querySelector('.header-form [name="taskName"]'),
  taskDescrInput: document.querySelector(
    '.header-form [name="taskDescription"]'
  ),
  addBtn: document.querySelector('.header-form [type="submit"]'),
  tasksListEl: document.querySelector('.tasks-list'),
  themeBtn: document.querySelector('.theme-toggle-button'),
  body: document.querySelector('body'),
};

export default refs;