(function(){
    'use strict'

    angular.module('admin')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject=['MenuService'];
function RegistrationController(MenuService) {
  var reg = this;
  console.log("woor");
 reg.value=
 function(){
     console.log("work");
    MenuService.getMenuItems(reg.user.favoritedish);
 } 
//   reg.submit = function () {
//     reg.completed = true;
//   };
}
})();