/* eslint-disable func-names */
window.onload = function () {
  async function addUser(e) {
    e.preventDefault();

    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // const submit = document.getElementById('body').value;

    const response = await fetch('http://localhost:2000/api/v1/auth/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        firstname, lastname, email, password,
      }),
    });
    const data = await response.json();
    console.log(data);
  }

  document.getElementById('addUsers').addEventListener('submit', addUser);
};