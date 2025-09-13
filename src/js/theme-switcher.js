import refs from './refs.js';
import { addToLS, getFromLS } from './local-storage-api.js';

const themeKey = 'THEME';
const darkTheme = 'theme-dark';
const lightTheme = 'theme-light';

refs.themeBtn.addEventListener('click', () => {
  refs.body.classList.toggle(darkTheme);
  refs.body.classList.toggle(lightTheme);

  addToLS(themeKey, getCurrentThemeClass());
});

function getCurrentThemeClass() {
  return (
    Array.from(refs.body.classList).find(className =>
      className.includes('theme')
    ) || darkTheme
  );
}

export function setThemeClass() {
  const theme = getFromLS(themeKey);

  if (theme) {
    refs.body.classList.remove(darkTheme, lightTheme);
    refs.body.classList.add(theme);
  }
}
