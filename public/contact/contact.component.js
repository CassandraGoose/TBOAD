angular
  .module("app")
  .controller("ContactController", ContactController)

function ContactController($http, $stateParams, $state) {
  const vm = this

  vm.$onInit = function() {
    console.log("hello from contact component");
  }
}
