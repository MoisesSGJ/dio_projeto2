// recebe o nome de usuario,vitórias e derrotas
const playerName = prompt("Digite o nome do herói:");
const wins = Number(prompt("Digite o número de vitórias do herói:"));
const losses = Number(prompt("Digite o número de derrotas do herói:"));

//calcula win - loss
function calculateScore(wins, losses) {
  return wins - losses;
}

// recebe o score e retorna o rank correspondente
function getRank(score) {
  let rank;

  if (score <= 10) {
    rank = "Ferro";
  } else if (score <= 20) {
    rank = "Bronze";
  } else if (score <= 50) {
    rank = "Silver";
  } else if (score <= 80) {
    rank = "Gold";
  } else if (score <= 90) {
    rank = "Diamante";
  } else if (score <= 100) {
    rank = "Lendário";
  } else {
    rank = "Imortal";
  }

  return rank;
}
// Exemplo
  const playerScore = calculateScore(wins, losses);
  const playerRank = getRank(playerScore);

//saida
console.log("O heroi: " + playerName + " tem o saldo de: "+ playerScore + " vitorias e esta no nivel: " + playerRank);