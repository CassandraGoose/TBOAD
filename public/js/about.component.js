angular
  .module("app")
  .controller("AboutController", AboutController)

function AboutController($http, $stateParams, $state) {
  const vm = this
  vm.$onInit = function() {

    console.log("hello from about component");
  }

}