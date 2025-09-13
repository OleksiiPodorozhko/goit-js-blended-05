export function addToLS(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getFromLS(key) {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}