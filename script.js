const form = document.getElementById('form');

form.addEventListener('submit', function(e){

e.preventDefault();

const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const dept = document.getElementById('dept').value;

if(name === '' || email === '' || dept === ''){
alert('Please fill all details');
return;
}

localStorage.setItem('odrsName', name);
localStorage.setItem('odrsEmail', email);
localStorage.setItem('odrsDept', dept);

window.location.href = 'payment.html';

});
