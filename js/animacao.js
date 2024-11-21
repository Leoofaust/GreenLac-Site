// Seleciona o botão
const botao = document.querySelector('.apresentacao__conteudo__botao .apresentacao__links__link');

// Seleciona o título
const titulo = document.querySelector('.apresentacao__conteudo__titulo');

// Adiciona o evento de clique ao botão
botao.addEventListener('click', function (event) {
    event.preventDefault(); // Impede o comportamento padrão do link

    // Altera o texto do título
    titulo.textContent = 'Mensagem enviada com sucesso!';
    titulo.style.fontSize = '3rem'; // Ajuste o tamanho conforme necessário
});
