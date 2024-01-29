const users = JSON.parse(localStorage.getItem('users')) || [];
function checkUser(email, password) {
  return users.some(user => user.email === email && user.password === password);
}
function saveUserInSessionStorage(user) {
  sessionStorage.setItem('user', JSON.stringify(user));
}
function displayLoginMessage(message) {
  document.getElementById('loginMessage').textContent = message;
}
const form = document.getElementById('loginForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  if (checkUser(email, password)) {
    const user = users.find(user => user.email === email);
    saveUserInSessionStorage(user);
    displayLoginMessage('Login successful!');
  } else {
    displayLoginMessage('Invalid email or password');
  }
  form.reset();
});