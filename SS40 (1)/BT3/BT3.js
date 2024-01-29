function addPlayer(id, name) {
    let players = JSON.parse(localStorage.getItem('players')) || [];
    players.push({ id, name });
    localStorage.setItem('players', JSON.stringify(players));
  }
  function displayPlayers() {
    let players = JSON.parse(localStorage.getItem('players')) || [];
    let output = '';
    players.forEach(player => {
      output += `<li>${player.id}: ${player.name}</li>`;
    });
    document.getElementById('players').innerHTML = output;
  }
  function deletePlayer(id) {
    let players = JSON.parse(localStorage.getItem('players')) || [];
    players = players.filter(player => player.id !== id);
    localStorage.setItem('players', JSON.stringify(players));
  }
  document.getElementById('addPlayerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let id = document.getElementById('playerId').value;
    let name = document.getElementById('playerName').value;
    addPlayer(id, name);
    document.getElementById('playerId').value = '';
    document.getElementById('playerName').value = '';
  });
  document.getElementById('deletePlayerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let id = document.getElementById('deletePlayerId').value;
    deletePlayer(id);
    document.getElementById('deletePlayerId').value = '';
  });
  window.onload = function() {
    displayPlayers();
  };