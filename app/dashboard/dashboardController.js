(function () {
  angular.module('primeiraApp').controller('DashboardCtrl', [
    '$http',
    DashboardController
  ])

  function DashboardController($http) {
    const vm = this
    vm.getSumary = function() {
      const url = 'http://localhost:3003/api/billingSummary'
      $http.get(url).then(function(response) {
        const {credit = 0, debt = 0 } = response.data
        vm.credit = credit
        vm.debt = debt
        vm.total = credit - debt
      })
    }
    vm.getSumary()
  }
})()
/*
angular.module('primeiraApp').controller('DashboardCtrl', [
  '$scope',
  '$http',
  DashboardController
])

function DashboardController($scope, $http) {

  $scope.getSumary() = function() {
    const url = 'http://localhost:3003/api/billingSummary'
    $http.get(url).success(function({credit = 0, debt = 0 }) {
      $scope.credit = credit
      $scope.debt = debt
      $scope.total = credit - debt
    })
  }
  $scope.getSumary()
}

*/
