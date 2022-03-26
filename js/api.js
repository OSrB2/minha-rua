const inputCep = document.querySelector('#cep');

inputCep.onkeyup = (evento) => {
  if (inputCep.value.length < 8) {
    return;
  }

  alert('CEP completo!');
};
