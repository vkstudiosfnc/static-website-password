(() => {
  const $ = (sel) => document.querySelector(sel);
  const clearText = (el) => (el.textContent = '');

  const input = $('.input-main');
  const button = $('.btn-main');
  const errorMsg = $('.error-msg');
  const correctMsg = $('.correct-msg');

  const CORRECT_PASSWORD = 'FVoq1+qnZLbHyhsghePWtW+Lh/oRHhLBzWXHnozYLe1i83vL6ruyeQ==';

  const updateButtonState = () => {
    button.disabled = !input.value.trim();
  };

  const resetMessages = () => {
    clearText(errorMsg);
    clearText(correctMsg);
    errorMsg.dataset.keep = 'false';
  };

  input.addEventListener('input', () => {
    resetMessages();
    updateButtonState();
  });

  input.addEventListener('keydown', ({ key }) => {
    if (key === 'Enter' && !button.disabled) button.click();
  });

  button.addEventListener('click', () => {
    const isCorrect = input.value === CORRECT_PASSWORD;

    resetMessages();

    if (isCorrect) {
      correctMsg.textContent = 'correct password!';
    } else {
      errorMsg.textContent = 'wrong password!';
      errorMsg.dataset.keep = 'true';
      input.value = '';
      updateButtonState();
    }
  });

  updateButtonState();
})();
