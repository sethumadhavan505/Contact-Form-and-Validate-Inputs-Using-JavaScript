const form = document.getElementById('form');

form.addEventListener('submit', function(e){

e.preventDefault();

const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const phone = document.getElementById('phone').value;
const offer = document.getElementById('offer').value;
const dept = document.getElementById('dept').value;

if(name === '' || email === '' || phone === '' || offer === '' || dept === ''){
    alert('Please fill all details');
    return;
}

if (!/^[0-9]{10}$/.test(phone)) {
    alert("Please enter a valid 10-digit mobile number");
    return;
}

localStorage.setItem('odrsName', name);
localStorage.setItem('odrsEmail', email);
localStorage.setItem('odrsPhone', phone);
localStorage.setItem('odrsOffer', offer);
localStorage.setItem('odrsDept', dept);

window.location.href = 'payment.html';

});
