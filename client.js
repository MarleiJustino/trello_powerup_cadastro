var TrelloPowerUp = window.TrelloPowerUp;

TrelloPowerUp.initialize({
  'card-buttons': function(t, options) {
    return [{
      icon: 'https://stalwart-strudel-8b9cf2.netlify.app/icon.png',
      text: 'Cadastrar Cliente',
      callback: 'abrirFormulario' // nome da função callback declarada abaixo
    }];
  },

  'functions': {
    abrirFormulario: function(t) {
      return t.popup({
        title: 'Cadastro de Cliente',
        url: 'index.html',
        height: 600
      });
    }
  }
});
