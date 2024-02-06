chrome.runtime.onInstalled.addListener(function() {
  alert("Extensão instalada.");
});

document.getElementById("btn").addEventListener("click", function() {
  const entrada = document.getElementById("hstart").value;
  const saidaAlmoco = document.getElementById("lunchStart").value;
  const voltaAlmoco = document.getElementById("lunchEnd").value;
  const saida = document.getElementById("hend").value;
  localStorage.setItem('entrada', entrada);
  localStorage.setItem('saidaAlmoco', saidaAlmoco);
  localStorage.setItem('voltaAlmoco', voltaAlmoco);
  localStorage.setItem('saida', saida);
  alert("Horários salvos com sucesso!");
});

chrome.runtime.onStartup.addListener(function() {
  alert("Extensão iniciada com o navegador.");
  function verificarHora() {
    let agora = new Date();
    let horaAtual = agora.getHours();
    let minutosAtual = agora.getMinutes();
    let hora1 = 9;
    let hora2 = 13;
    let hora3 = 14;
    let hora4 = 18;
    let minutosInicio = 0;

    if (horaAtual === hora1 || horaAtual === hora2 || horaAtual === hora3 || horaAtual === hora4) {
      if (minutosAtual === minutosInicio) {
        const url = `https://app.tangerino.com.br/Tangerino/pages/baterPonto/?_gl=1*1ashdo3*pa_ga*MTAwMjM2NTc4MC4xNzA1NDM4ODcx*pa_ga_29WTW2QBLL*MTcwNTQzODg3MS4xLjAuMTcwNTQzODg3MS42MC4wLjA.`
        chrome.tabs.create({ url: url });
      }
    } 
  }

  setInterval(verificarHora, 1000);
});