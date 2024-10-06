document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simple validation (Replace with actual validation logic if needed)
  const correctUsername = 'hpclan';
  const correctPassword = 'hpclan123';

  if (username === correctUsername && password === correctPassword) {
    window.location.href = 'members.html';
  } else {
    document.getElementById('error-message').textContent = 'Invalid username or password';
  }
});
