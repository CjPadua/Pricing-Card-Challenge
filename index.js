alertUser = () => window.alert('You clicked the button.');

const button = document.querySelector('button');
// button.addEventListener(onclick, alertUser)
button.onclick = alertUser
