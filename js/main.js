document.addEventListener('DOMContentLoaded', function() {
  classModal = document.querySelector('.modal');
  classModal.addEventListener('click', function() {
    classModal.style.display = 'none';
  });

  classSignin = document.querySelector('.signin');
  classSignin.addEventListener('click', function() {
    classModal.style.display = 'block';
  });

  classClose = document.querySelector('.close');
  classClose.addEventListener('click', function() {
    classModal.style.display = 'none';
  });

  inputUser = document.querySelector('#user');
  inputPass = document.querySelector('#pass');

  classSubmit = document.querySelector('.submit');
  classSubmit.addEventListener('click', function() {
    inputUser.classList.add("error");
    inputPass.classList.add("error");
    event.stopPropagation();
  });

  inputUser.addEventListener('click', function() {
    inputUser.classList.remove("error");
    event.stopPropagation();
  });

  inputPass.addEventListener('click', function() {
    inputPass.classList.remove("error");
    event.stopPropagation();
  });

});
