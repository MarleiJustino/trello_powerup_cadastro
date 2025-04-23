window.TrelloPowerUp.initialize({
  'card-buttons': function(t, options) {
    return [{
      text: 'Abrir Ficha',
      callback: function(t) {
        return t.popup({
          title: 'Ficha de Cadastro',
          url: 'cadastro-clientes.html',
          height: 500
        });
      }
    }];
  },

  'card-back-section': function(t, options) {
    return {
      title: 'Cadastro de Cliente',
      icon: 'https://MarleiJustino.github.io/trello_powerup_cadastro/icone-powerup.png',
      content: {
        type: 'iframe',
        url: 'cadastro-clientes.html',
        height: 500
      }
    };
  }
});
