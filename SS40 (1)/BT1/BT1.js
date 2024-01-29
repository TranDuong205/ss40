function Person(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
  function addPerson(person) {
    let people = JSON.parse(localStorage.getItem('people')) || [];
    people.push(person);
    localStorage.setItem('people', JSON.stringify(people));
  }
  function displayPeople() {
    let people = JSON.parse(localStorage.getItem('people')) || [];
    let output = '';
    people.forEach(person => {
      output += `<p>${person.name}, ${person.age}, ${person.email}</p>`;
    });
    document.getElementById('people').innerHTML = output;
  }
  document.getElementById('addPersonForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let email = document.getElementById('email').value;
    let person = new Person(name, age, email);
    addPerson(person);
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('email').value = '';
  });
  window.onload = function() {
    displayPeople();
  };