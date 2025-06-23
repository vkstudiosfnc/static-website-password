const input = document.querySelector('.input-main');
const button = document.querySelector('.btn-main');
const errorMsg = document.querySelector('.error-msg');
const correctMsg = document.querySelector('.correct-msg');

function toggleButton() {
  button.disabled = input.value.trim() === '';
  if (errorMsg.dataset.keep !== 'true') {
    errorMsg.textContent = '';
    correctMsg.textContent = '';
  }
}

input.addEventListener('input', () => {
  errorMsg.textContent = '';
  errorMsg.dataset.keep = 'false';
  correctMsg.textContent = '';
  toggleButton();
});

button.addEventListener('click', () => {
  if (input.value === 'FVoq1+qnZLbHyhsghePWtW+Lh/oRHhLBzWXHnozYLe1i83vL6ruyeQ==') {
    correctMsg.textContent = 'correct password!';
    errorMsg.textContent = '';
    errorMsg.dataset.keep = 'false';
  } else {
    errorMsg.textContent = 'wrong password!';
    errorMsg.dataset.keep = 'true';
    correctMsg.textContent = '';
    input.value = '';
    toggleButton();
  }
});

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && !button.disabled) {
    button.click();
  }
});

toggleButton();