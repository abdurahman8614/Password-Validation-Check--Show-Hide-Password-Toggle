let password =document.getElementById('password');
let toggle = document.getElementById('toggleBtn');
let lowercase = document.getElementById('lower');
let uppercase =  document.getElementById('upper');
let digit = document.getElementById('number');
let specialChar = document.getElementById('special');
let minlength = document.getElementById('length');

//check password
function checkPassword(data){
    const lower = new RegExp('(?=.*[a-z])');
    const upper = new RegExp('(?=.*[A-Z])');
    const number = new RegExp('(?=.*[0-9])');
    const special = new RegExp('(?=.*[!@#\$%\^&\*])');
    const length = new RegExp('(?=.{8,})');

    if (lower.test(data)){
        lowercase.classList.add('valid');
    }else{
        lowercase.classList.remove('valid');
    }
    if (upper.test(data)){
        uppercase.classList.add('valid');
    }else{
        uppercase.classList.remove('valid');
    }
    if (number.test(data)){
        digit.classList.add('valid');
    }else{
        digit.classList.remove('valid');
    }
    if (special.test(data)){
        specialChar.classList.add('valid');
    }else{
        specialChar.classList.remove('valid');
    }
    if (length.test(data)){
        minlength.classList.add('valid');
    }else{
        minlength.classList.remove('valid');
    }
}

toggle.onclick = function(){
    if (password.type === 'password'){
        password.setAttribute('type', 'text'),
        toggle.classList.add('hide');
    }else{
        password.setAttribute('type', 'password'),
        toggle.classList.remove('hide');
    }

}