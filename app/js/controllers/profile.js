app.controller('ProfileCtrl', function($scope) {
  $scope.profile = {
    name: 'Stef',

    title: 'CEO',

    description: 'Stef is a veteran game developer and manager with more than 20 years of professional experience.',

    extra: {
      'Favorite Game Console': 'Xbox 360',
      'Favorite Game': 'Nethack'
    },

    info: [{
      key: 'Favorite Game Console',
      value: 'Xbox 360'
    }, {
      key: 'Favorite Game',
      value: 'Nethack'
    }]
  };
});