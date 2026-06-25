const form = document.getElementById('form');

form.addEventListener('submit', function(e){

e.preventDefault();

const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const phone = document.getElementById('phone').value;
const dept = document.getElementById('dept').value;

if(name === '' || email === '' || phone === '' || dept === ''){
alert('Please fill all details');
return;
}

if(phone.length !== 10){
    alert("Please enter a valid 10-digit mobile number");
    return;
}

localStorage.setItem('odrsName', name);
localStorage.setItem('odrsEmail', email);
localStorage.setItem('odrsPhone', phone);
localStorage.setItem('odrsDept', dept);

window.location.href = 'payment.html';

});
