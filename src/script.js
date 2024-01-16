function verificarHora() {
    let agora = new Date();
    alert(agora);
  
    var horaEstaNoIntervalo = function (horaAtual, horaInicio, horaFim) {
      return horaAtual >= horaInicio && horaAtual <= horaFim;
    };
    if (horaEstaNoIntervalo(agora.getHours(), 15,16)) {
      chrome.tabs.create({ url: "http://pt.stackoverflow.com" });
    } else {
      alert('Ainda nao e o momento certo para o redirecionamento.');
    }
  }
  
  document.getElementById('btn').addEventListener('click', verificarHora);
  
  setInterval(verificarHora, 10000);
  verificarHora();
  
  