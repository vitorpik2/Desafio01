const form = document.getElementById('form');
const produtoInput = document.getElementById('produto');
const quantidadeInput = document.getElementById('quantidade');
const lista = document.getElementById('lista');
const limparBtn = document.getElementById('limpar');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const produto = produtoInput.value.trim();
  const quantidade = quantidadeInput.value.trim();

  if (produto === '' || quantidade === '' || isNaN(quantidade) || quantidade <= 0) {
    alert('Preencha corretamente o nome do produto e a quantidade.');
    return;
  }

  const li = document.createElement('li');
  li.textContent = `${produto} - ${quantidade}`;
  li.addEventListener('click', function () {
    li.classList.toggle('completed');
  });

  lista.appendChild(li);
  produtoInput.value = '';
  quantidadeInput.value = '';
});

limparBtn.addEventListener('click', function () {
  lista.innerHTML = '';
});
