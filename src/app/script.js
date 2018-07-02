document.addEventListener('DOMContentLoaded', function () {
  const preventDefaultCheckbox = document.getElementById('prevent-default');

  const form = document.getElementById('contact');

  form.addEventListener('submit', function (event) {
    if (preventDefaultCheckbox.checked) {
      event.preventDefault();
      alert('Default event prevented!');
      console.log(event); // eslint-disable-line no-console
    }
  });
});
