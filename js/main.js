// Создаем переменную, в которую положим кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
// Создаем переменную, в которую положим меню
let menu = document.querySelector('.sidebar');
// отслеживаем клик по кнопке меню и запускаем функцию 
menuToggle.addEventListener('click', function (event) {
  // отменяем стандартное поведение ссылки
  event.preventDefault();
  // вешаем класс на меню, когда кликнули по кнопке меню 
  menu.classList.toggle('visible');
});


const loginElem = document.querySelector('.login'),
      loginForm = document.querySelector('.login-form'),
      emailInput = document.querySelector('.login-email'),
      passwordInput = document.querySelector('.login-password'),
      loginSignup = document.querySelector('.login-signup');
// console.log(loginElem);

const listUsers = [
  {
    id: '01',
    email: 'max@mail.ru',
    password: '12345',
    displayName: 'MaxJS'
  },
  {
    id: '02',
    email: 'serg@mail.ru',
    password: '54321',
    displayName: 'SergJS'
  },
];

const setUsers = {
  user: null,
  logIn(email, password) {
    console.log('logIn');
  },
  logOut() {
    console.log('logOut');
  },
  signUp(email, password) {
    console.log('signUp');
    if (!this.getUser(email)) {
      listUsers.push({email, password, displayName: email});
    } else {
      alert("Пользователь с таким именем уже есть");
    }
  }
};
// setUsers.logIn();
// setUsers.logOut();
// setUsers.signUp();

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  // const emailValue = emailInput.value,
  //       passwordValue = passwordInput.value;
  // setUsers.logIn(emailValue, passwordValue);
  setUsers.logIn(emailInput.value, passwordInput.value);  //замена прошлых 3-х
});
loginSignup.addEventListener('click', (event) => {
  event.preventDefault();
    // const emailValue = emailInput.value,
  //       passwordValue = passwordInput.value;
  // setUsers.signUp(emailValue, passwordValue);
  setUsers.signUp(emailInput.value, passwordInput.value); //замена прошлых 3-х
});

