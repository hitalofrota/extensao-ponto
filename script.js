function verificarHora() {
    let agora = new Date();
    alert(agora);
  
    var horaEstaNoIntervalo = function (horaAtual, horaInicio, horaFim) {
      return horaAtual >= horaInicio && horaAtual <= horaFim;
    };
  
    // Corrigido para exibir as horas desejadas corretamente
    if (horaEstaNoIntervalo(agora.getHours(), 12,13)) {
      chrome.tabs.create({ url: "http://pt.stackoverflow.com" });
    } else {
      alert('Ainda não é o momento certo para o redirecionamento.');
    }
  }
  
  document.getElementById('btn').addEventListener('click', verificarHora);
  
  setInterval(verificarHora, 60000);
  verificarHora();
  
  