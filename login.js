const wrapper = document.querySelector('.wrapper');
const intro = document.querySelector('.well');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnlogin-popup');
const iconClose = document.querySelector('.icon-close');
const errorMsg = document.querySelector('.error-message');
intro.classList.add('intro-popup');
registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
    errorMsg.classList.remove('error');
    intro.classList.remove('intro-popup');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
    errorMsg.classList.remove('error');
    intro.classList.remove('intro-popup');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
    errorMsg.classList.remove('error');
    intro.classList.remove('intro-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
    errorMsg.classList.remove('error');
    intro.classList.add('intro-popup');
});

var errorMessage = document.getElementById('error-message');

function register() {
    var regUsername = document.getElementById('regUsername').value;
    var regPassword = document.getElementById('regPassword').value;
    var regEmail = document.getElementById('regEmail').value;

    // Save credentials in local storage
    if(regUsername==='' && regPassword==='' && regEmail===''){
        alert('Please provide required data!');
    }else{
    localStorage.setItem('username', regUsername);
    localStorage.setItem('password', regPassword);
    localStorage.setItem('email', regEmail);
    alert('User registered successfully!');
    }
}
// function hashPassword(password) {
//     var hash = 0;
//     for (var i = 0; i < password.length; i++) {
//         var char = password.charCodeAt(i);
//         hash = (hash << 5) - hash + char;
//     }
//     return hash.toString();
// }
function login() {
    var loginUsername = document.getElementById('username').value;
    var loginPassword = document.getElementById('password').value;

    // Retrieve credentials from local storage
    var storedUsername = localStorage.getItem('username');
    var storedPassword = localStorage.getItem('password');

    // Check if the entered credentials match the with the stored credentials
    // if (loginUsername === storedUsername && loginPassword === storedPassword) {
    //     document.getElementById('errorMessage').innerText = 'Login successful!';
    // } else {
    //     document.getElementById('errorMessage').innerText = 'Wrong username or password!';
    // }

    if (loginUsername === storedUsername && loginPassword === storedPassword) {
        errorMessage.textContent = '';
        window.location.href = '/main/main.html';
    }
    else {
        errorMsg.classList.add('error');
        errorMessage.textContent = 'Incorrect username or password. Please try again.';
    }
}