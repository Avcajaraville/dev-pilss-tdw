document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.red-pill');
  const container = document.querySelector('.matrix-container');

  button.addEventListener('click', (event) => {
    container.style.display = 'block';
  });

  document.addEventListener('keyup', (event) => {
    if (event.keyCode === 27) {
      container.style.display = 'none';
    }
  });
});
