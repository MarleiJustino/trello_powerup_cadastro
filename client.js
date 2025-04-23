var TrelloPowerUp = window.TrelloPowerUp;

function abrirFormulario(t) {
  return t.popup({
    title: 'Cadastro de Cliente',
    url: 'index.html',
    height: 600
  });
}

TrelloPowerUp.initialize({
  'card-buttons': function (t, options) {
    return [{
      icon: 'https://stalwart-strudel-8b9cf2.netlify.app/icon.png',
      text: 'Cadastrar Cliente',
      callback: abrirFormulario
    }];
  }
});
