document.addEventListener('DOMContentLoaded', function () {
  const preventDefault = document.getElementById('prevent-default');

  const form = document.getElementById('contact');

  form.addEventListener('submit', function (event) {
    if (preventDefault.checked) {
      event.preventDefault();
      console.log(event); // eslint-disable-line no-console
    }
  });
});
