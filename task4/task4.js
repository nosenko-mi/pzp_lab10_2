const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    // prevent page reload
    event.preventDefault()

    let email = form.elements['emailInput'].value
    let password = form.elements['passwordInput'].value

    if (email.value === '' || password.value === '') {
        alert('Enter valid credentials')
    } else {
        // get Encoded values
        const data = new FormData(form); // get form data
        const xhr = new XMLHttpRequest(); // create new XMLHttpRequest object
        xhr.open('POST', '/users/login'); // set request method and URL
        xhr.send(data); // send form data in POST request

        // decode FormData
        let user = {};
        data.forEach((value, key) => user[key] = value);
        console.log(user)
    }

})
