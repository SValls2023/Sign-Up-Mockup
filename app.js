const form = document.querySelector('#odin-form');
const fname = document.querySelector('#first-name');
const lname = document.querySelector('#last-name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const password = document.querySelector('#password');
const passwordCheck = document.querySelector('#password-check');

form.addEventListener('submit', e => {
    if (!inputCheck()) {
        e.preventDefault();
    }
});

function inputCheck() {
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const passValue = password.value.trim();
    const passCheckValue = passwordCheck.value.trim();
    let check = 0;

    // First name check
    if (fnameValue === "") {
        console.log("test");
        setError(fname, '* Please enter your first name');
    } else {
        setValid(fname);
        check += 1;
    }

    // Last name check
    if (lnameValue === "") {
        setError(lname, '* Please enter your last name');
    } else {
        setValid(lname);
        check += 1;
    }

    // Email check
    if (emailValue === "") {
        setError(email, '* Please enter your email');
    } else if (!checkEmail(emailValue)) {
        setError(email, '* Enter a valid email (Ex: jdoe@app.io)');
    } else {
        setValid(email);
        check += 1;
    }

    // Phone Check 
    if (phoneValue === "") {
        setError(phone, '* Please enter your phone number');
    } else if (!checkPhone(phoneValue)) {
        setError(phone, '* Try using the following formats (1234567890, (123) 456 7890, 123-456-7890)');
    } else {
        setValid(phone);
        check += 1;
    }

    // Password Check
    if (passValue === "") {
        setError(password, '* Please enter your password');
    } else if (!checkPassword(passValue)) {
        setError(password, '* Password does not meet the requirements below');
    } else {
        setValid(password);
        check += 1;
    }

    // Confirm Password Check 
    if (passCheckValue === "") {
        setError(passwordCheck, '* Confirm your password here');
    } else if (passCheckValue !== passValue) {
        setError(passwordCheck, '* Passwords do not match');
    } else if (passCheckValue === passValue) {
        setValid(passwordCheck);
        check += 1;
    }

    if (check === 6) return true;

    return false;

}

function setError(input, message) {
    const field = input.parentElement;
    const hint = field.querySelector('.hint')
    field.className = 'field error'
    hint.innerHTML = message;
}

function setValid(input) {
    const field = input.parentElement;
    const hint = field.querySelector('.hint');
    field.className = "field valid";
    hint.innerHTML = '';
}

/* Regular Expression Requirement Checks */

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function checkPhone(phone) {
    return /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(phone);
}

function checkPassword(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
}
