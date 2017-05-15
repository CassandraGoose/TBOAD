angular
  .module("app")
  .controller("HomeController", HomeController)

function HomeController($http, $stateParams, $state) {
  const vm = this

  vm.$onInit = function() {

    console.log("hello from home component");
  }


  function podcastAdd() {
    // $http.post("http://thesecretkeeper.herokuapp.com/secrets", {
    //     text: vm.secrets.text
    //   })
    //   .then(function(response) {
    //     $state.go('itisdone')
    //   })

    // $http.post('http://127.0.0.1:3000/secrets', {
    //     what: 'the fuck'
    //   })
    //   .then(function(response) {
    //     console.log(response)
    //   })
  }
}
