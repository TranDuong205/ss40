function saveUser(name, email) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ name, email });
    localStorage.setItem('users', JSON.stringify(users));
  }
  function displayRegisteredUsers() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const ul = document.getElementById('registeredUsers');
    ul.innerHTML = '';
    users.forEach((user, index) => {
      const li = document.createElement('li');
      li.textContent = `${index + 1}. ${user.name} (${user.email})`;
      ul.appendChild(li);
    });
  }
  const form = document.getElementById('registrationForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    saveUser(name, email);
    form.reset();
    displayRegisteredUsers();
  });
  displayRegisteredUsers();