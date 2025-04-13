function showPage(id) {
  document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function mostrarComodo(comodo) {
  const frases = {
    cozinha: "Sua amizade é quentinha igual chá em tarde fria.",
    sala: "A gente cabe no sofá e no coração uma da outra.",
    quarto: "Confidências, risadas e aquelas conversas eternas.",
    banheiro: "Até nas crises existenciais você me acompanha.",
    varanda: "Juntas, a gente observa o mundo e inventa outros."
  };
  document.getElementById('fraseComodo').textContent = frases[comodo];

  const som = document.getElementById('somPorta');
  som.currentTime = 0;
  som.play();
}
