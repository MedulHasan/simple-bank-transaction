const submitBtn = document.getElementById('submit-btn');
const email = document.getElementById('email');
let password = document.getElementById('password');

submitBtn.addEventListener('click', function () {
    const emailValue = email.value;
    let passwordValue = password.value;
    if (emailValue == 'dom@js.com' && passwordValue == 'lock') {
        window.location.href = '../banking.html';
    } else {
        alert('Invalid Cradential');
        // password = '';
    }
})