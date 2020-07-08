var inputValue = document.querySelector('#input');
var bodyElement = document.querySelector('body');
var listElement = document.createElement('ul');
var listItem = document.createElement('li');

function getUserRepo() {
  inputValue = inputValue.value;
  if (!inputValue) {
    alert('Insira o usuário!');
  }
  renderUser();
  axios
    .get(`https://api.github.com/users/${inputValue}/repos`)
    .then((response) => {
      renderRepos(response);
    })
    .catch((error) => {
      renderError(error);
    });
}

function renderUser() {
  var listItem = document.createElement('li');
  itemText = document.createTextNode('Carregando...');
  listItem.appendChild(itemText);
  listElement.appendChild(listItem);
  bodyElement.appendChild(listElement);
}

function renderRepos(response) {
  listElement.innerHTML = '';
  repos = response.data;
  for (value of repos) {
    var listItem = document.createElement('li');
    itemText = document.createTextNode(value.name);
    listItem.appendChild(itemText);
    listElement.appendChild(listItem);
    bodyElement.appendChild(listElement);
  }
}
function renderError(error) {
  listElementText.innerHTML = '';
  itemText = document.createTextNode('Error 404: Not Found');

  listItem.appendChild(itemText);
  listElement.appendChild(listItem);
  bodyElement.appendChild(listElement);
}
