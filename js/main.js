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
  loginSignup = document.querySelector('.login-signup'),
  userElem = document.querySelector('.user'),
  userNameElem = document.querySelector('.user-name');
// console.log(loginElem);


const listUsers = [{
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
  logIn(email, password, handler) {
    // console.log('logIn');
    const user = this.getUser(email);
    if (user && user.password === password) {
      this.authorizedUser(user);
      handler();
    } else {
      alert("Пользователь с такими данными не найден!");
    }
  },
  logOut() {
    // console.log('logOut');
  },
  signUp(email, password, handler) {
    // console.log('signUp');
    if (!this.getUser(email)) {
      const user = {
        email,
        password,
        displayName: email
      };
      listUsers.push(user);
      this.authorizedUser(user);
      handler();
    } else {
      alert("Пользователь с таким именем уже есть");
    }
  },
  getUser(email) {
    // let user = null;
    // for (let i = 0; i < listUsers.length; i++) {
    //   (listUsers[i].email === email) {
    //     user = listUsers[i];
    //   }
    // }
    // return user;
    return listUsers.find((item) => item.email === email
    );
  },
  authorizedUser(user) {
    this.user = user;
  }
};
// setUsers.logIn();
// setUsers.logOut();
// setUsers.signUp();

const toggleAuthDom = () => {
  const user = setUsers.user;
  if(user) {
    loginElem.style.display = 'none';
    userElem.style.display = '';
    userNameElem.textContent = user.displayName;
  } else {
    loginElem.style.display = '';
    userElem.style.display = 'none';
  }
};

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  // const emailValue = emailInput.value,
  //       passwordValue = passwordInput.value;
  // setUsers.logIn(emailValue, passwordValue);
  setUsers.logIn(emailInput.value, passwordInput.value, toggleAuthDom); //замена прошлых 3-х
  
});
loginSignup.addEventListener('click', (event) => {
  event.preventDefault();
  // const emailValue = emailInput.value,
  //       passwordValue = passwordInput.value;
  // setUsers.signUp(emailValue, passwordValue);
  setUsers.signUp(emailInput.value, passwordInput.value, toggleAuthDom); //замена прошлых 3-х
  
});

toggleAuthDom();