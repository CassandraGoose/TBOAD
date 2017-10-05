angular
  .module("app")
  .controller("HomeController", HomeController)

function HomeController($http, $stateParams, $state) {
  const vm = this
  vm.messageAdd = messageAdd

  vm.$onInit = function() {
  }

  function messageAdd() {
      $http.post("http://tboadpodcast.herokuapp.com/messages", {
          name: vm.message.name,
          text: vm.message.text
        })
        .then(function(response) {
        })

    }
}
