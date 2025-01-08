// Seleciona o visor (onde os números e operações aparecem)
let visor = document.querySelector('div#txtNum');
// Seleciona todos os botões
let botoes = document.querySelectorAll('div.botoes button');

// Variáveis para armazenar os números e a operação
let numero1 = '';
let operacao = '';

// Adiciona evento de clique para cada botão
botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        let valorBotao = botao.textContent; // Captura o texto do botão clicado

        // Se for um número, adiciona ao visor
        if (!isNaN(valorBotao)) {
            visor.textContent += valorBotao;

        // Se for uma operação (+, -, *, /)
        } else if (valorBotao === '+' || valorBotao === '-' || valorBotao === '*' || valorBotao === '/') {
            numero1 = visor.textContent; // Armazena o número digitado no visor
            operacao = valorBotao; // Armazena a operação escolhida
            visor.textContent = ''; // Limpa o visor para o próximo número

        // Se for o botão de igual, realiza a operação
        } else if (valorBotao === '=') {
            let numero2 = visor.textContent; // Armazena o segundo número
            let resultado = 0;

            // Realiza a operação com base no operador armazenado
            if (operacao === '+') {
                resultado = Number(numero1) + Number(numero2);
            } else if (operacao === '-') {
                resultado = Number(numero1) - Number(numero2);
            } else if (operacao === '*') {
                resultado = Number(numero1) * Number(numero2);
            } else if (operacao === '/') {
                resultado = Number(numero1) / Number(numero2);
            }

            // Exibe o resultado no visor e reseta os valores
            visor.textContent = resultado;
            operacao = '';
            numero1 = '';

        // Se for o botão AC, limpa tudo
        } else if (valorBotao === 'AC') {
            visor.textContent = '';
            numero1 = '';
            operacao = '';
        }
    });
});

