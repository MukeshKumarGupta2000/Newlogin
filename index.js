// Get the form element
const loginForm = document.getElementById('login-form');

// Add a submit event listener to the form
loginForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Get the username and password input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Implement your authentication logic here (e.g., send a request to a server)
    // For this example, we'll simply display an alert message
    alert(`Username: ${username}\nPassword: ${password}`);
});

