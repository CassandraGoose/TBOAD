angular
  .module("app")
  .controller("HomeController", HomeController)

function HomeController($http, $stateParams, $state) {
  const vm = this
  vm.messageAdd = messageAdd

  vm.$onInit = function() {

    console.log("hello from home component");
  }

  function messageAdd() {
      console.log("message add function");
      $http.post("http://tboadpodcast.herokuapp.com/messages", {
          name: vm.message.name,
          text: vm.message.text
        })
        .then(function(response) {
          console.log('done!');
        })

    }
}
