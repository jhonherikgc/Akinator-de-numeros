let computerNumber;
let userNumbers = [];
let tentativas = 0; //Variável que irá contar as tentativas

function init() {
    computerNumber = Math.floor(Math.random() * 100 + 1);
    console.log(computerNumber);
    tentativas = 0; //Reseta o número de tentativas ao iniciar um novo jogo
    userNumbers = []; //Limpa os números das tentativas anteriores
    document.getElementById('guesses').innerHTML = ''; //Limpa as tentativas
    document.getElementById('attempts').innerHTML = `${tentativas}`; //Reseta a exibição de tentativas
}

function compareNumbers() {
    const userNumber = Number(document.getElementById('inputBox').value);

    // Verifica se o número está dentro do intervalo válido
    if (userNumber < 1 || userNumber > 100) {
        document.getElementById('textOutput').innerHTML = 'Por favor, escolha um número entre 1 e 100.';
        return; //irá parar a execução se o número estiver fora do intervalo
    }

    userNumbers.push(userNumber);
    tentativas++; //Incrementa o número de tentativas a cada chute

    //Atualiza o campo com o número de tentativas
    document.getElementById('guesses').innerHTML = userNumbers.join(', ');
    document.getElementById('attempts').innerHTML = `${tentativas}`; //atualizando a exibição de tentativas

    //Dicas ao usuário
    if (userNumber > computerNumber) {
        if (userNumber - computerNumber <= 5) {
            document.getElementById('textOutput').innerHTML = 'Seu número é alto, mas você está perto!';
        } else {
            document.getElementById('textOutput').innerHTML = 'Seu número é muito alto';
        }
    } else if (userNumber < computerNumber) {
        if (computerNumber - userNumber <= 5) {
            document.getElementById('textOutput').innerHTML = 'Seu número é baixo, mas você está perto!';
        } else {
            document.getElementById('textOutput').innerHTML = 'Seu número é muito baixo';
        }
    } else {
        document.getElementById('textOutput').innerHTML = 'Parabéns, você ganhou!';
    }

    //Limpando o campo para os próximos chutes
    document.getElementById('inputBox').value = '';
}

//Adicionando a funcionalidade para o botão "Novo jogo"
document.getElementById('newGameButton').onclick = function() {
    location.reload(); //recarrega a página
}
