let icon = document.querySelector('.fa-solid');
let password = document.querySelector('.password');

let visibility = 'masked';


icon.addEventListener('click', () => {

    if (visibility === 'masked') {
        icon.classList.toggle('fa-eye');
        icon.classList.toggle('fa-eye-slash');
        password.type = 'text';

        visibility = 'unmasked';
    }

    else {
        icon.classList.toggle('fa-eye');
        icon.classList.toggle('fa-eye-slash');
        password.type = 'password';

        visibility = 'masked';
    }


});

