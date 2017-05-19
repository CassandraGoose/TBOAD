(function() {

  angular.module('app', ['ui.router'])
    .component('home', {
      templateUrl: '/home/home.html',
      controller: "HomeController"
    }).component('about', {
      templateUrl: '/about/about.html',
      controller: "AboutController"
    }).component('contact', {
      templateUrl: '/contact/contact.html',
      controller: "ContactController"
    })
}())
