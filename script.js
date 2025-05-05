document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const produto = document.getElementById('produto').value.trim();
    const quantidade = document.getElementById('quantidade').value.trim();
    const lista = document.getElementById('lista');
  
    if (produto === '' || quantidade === '' || isNaN(quantidade) || quantidade <= 0) {
      alert('Preencha corretamente o nome e a quantidade!');
      return;
    }
  
    const li = document.createElement('li');
    li.textContent = `${produto} - ${quantidade}`;
    li.addEventListener('click', function () {
      li.classList.toggle('completed');
    });
  
    lista.appendChild(li);
  
    document.getElementById('produto').value = '';
    document.getElementById('quantidade').value = '';
  });
  
  document.getElementById('limpar').addEventListener('click', function () {
    const lista = document.getElementById('lista');
    lista.innerHTML = '';
  });