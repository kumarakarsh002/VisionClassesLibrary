// function MainLogin(){
//     window.location.href="notes/notes.html";
// }

// 1. Select the Form and the Input fields
const loginForm = document.getElementById('LoginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

// 2. Listen for the form to be 'submitted' (via click or Enter key)
loginForm.addEventListener('submit', function(event) {
    
    // 3. IMPORTANT: Stop the form from refreshing the page immediately
    event.preventDefault(); 

    // 4. Get the text the user typed
    const usernameValue = usernameInput.value;
    const passwordValue = passwordInput.value;

    // 5. Make sure fields aren't empty
    if (usernameValue === '') {
        alert('Please enter your username.');
        return; 
    }

    if (passwordValue === '') {
        alert('Please enter your password.');
        return;
    }

    // 6. Check the credentials
    if (usernameValue === 'admin' && passwordValue === '12345') {
        alert('Login Successful! Welcome, Admin.');
        window.location.href = 'notes/notes.html';
    } else {
        alert('Error: Incorrect username or password.');
    }
});