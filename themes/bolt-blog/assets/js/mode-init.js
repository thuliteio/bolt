// Source: https://github.com/royalfig/dark-mode-demo

if (
  localStorage.getItem('data-color-mode') === 'dark' ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches &&
    !localStorage.getItem('data-color-mode'))
) {
  document.documentElement.setAttribute('data-color-mode', 'dark');
}
