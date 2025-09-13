import { addToLS, getFromLS } from './local-storage-api.js';

const tasksKey = "TASKS";
let tasks = loadTasksFromLs();

export function getTasks() { return [...tasks]; }

export function addTask(title, description) {
  tasks.push({title, description, id: createId() });
  addToLS(tasksKey, tasks);
  return tasks;
}

export function removeTask(id) {
  tasks = tasks.filter(taskObj => +taskObj.id !== +id);
  addToLS(tasksKey, tasks);
  return tasks;
}

function loadTasksFromLs() {
  const lsTasks = getFromLS(tasksKey);
  return lsTasks ? lsTasks : [];
}

function createId() {
  return (tasks?.length > 0) ? tasks[tasks.length - 1].id + 1 : 1;
}


