let registeredLogin;
let registeredPassword;
let whetherRegistered = false;

function login() {
    if (!whetherRegistered) {
        alert('Sign Up first');
        return;
}
    let attempts = 3;

    while (attempts > 0) {
        let userLogin = prompt('Enter your login');
        let userPassword = prompt('Enter your password');

        if (userLogin === registeredLogin && userPassword === registeredPassword) {
            alert('Access allowed');
            return;
        }
        else {
            attempts--;
            if (attempts > 0) {
                alert(`Incorrect data. ${attempts} attemps left`);
            }
            else {
                alert('Access denied');
            }
        }
    }
}

function register() {
    registeredLogin = prompt('Enter new login');
    registeredPassword = prompt('Enter new password');
    alert('Successfully Signed Up');
    whetherRegistered = true;
}

do {
    let choice = prompt(
        'Programme menu:\n' +
        '1 - Sign Up:\n' +
        '2 - Sign In:\n' +
        '0 - Exit:\n'
    );

    switch (choice) {
        case '1':
            register();
            break;
        case '2':
            login();
            break;
        case '0':
            alert('Exiting the programme');
            break;
        default:
            alert('Pick a valid option');
            break;
    }

} while (choice !== '0');