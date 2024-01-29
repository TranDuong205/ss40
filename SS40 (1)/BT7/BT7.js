function saveUser(userName) {
    localStorage.setItem('userName', userName);
  }
  function displayUser(userName) {
    document.getElementById('userDisplay').textContent = `User: ${userName}`;
    document.getElementById('userMessage').textContent = '';
    document.getElementById('userForm').style.display = 'none';
    document.getElementById('deleteUserButton').style.display = 'block';
  }
  function displayMessage(message) {
    document.getElementById('userMessage').textContent = message;
  }
  const form = document.getElementById('userForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userName = document.getElementById('userName').value;
    if (userName) {
      saveUser(userName);
      displayUser(userName);
    } else {
      displayMessage('Please enter a name');
    }
    form.reset();
  });
  const deleteUserButton = document.getElementById('deleteUserButton');
  deleteUserButton.addEventListener('click', () => {
    localStorage.removeItem('userName');
    document.getElementById('userDisplay').textContent = '';
    document.getElementById('userMessage').textContent = '';
    document.getElementById('userForm').style.display = 'block';
    document.getElementById('deleteUserButton').style.display = 'none';
  });
  const userName = localStorage.getItem('userName');
  if (userName) {
    displayUser(userName);
  } else {
    document.getElementById('userForm').style.display = 'block';
  }