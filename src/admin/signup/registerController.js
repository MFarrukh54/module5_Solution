(function(){
    'use strict'

    angular.module('admin')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject=['MenuService'];
function RegistrationController(MenuService) {
  var reg = this;
  reg.empty="";
  reg.true="";
  
  reg.update=function(){
      reg.empty="";
  }
 reg.value=
 function(){
     if(reg.user.favoritedish!="" && reg.user.favoritedish!=null){
    var promise=MenuService.getMenuItems(reg.user.favoritedish);
    promise.then(function(response){
        if(response.menu_items.length>0){
        reg.data=response;
    reg.true="true";
    MenuService.userData=reg.user;
}
        else{
            reg.true="";
            reg.empty="true";
            MenuService.userData=[];
        }
    });
 } 
 else{
    reg.true="";
    reg.empty="true";
    MenuService.userData=[];
 }
}
//   reg.submit = function () {
//     reg.completed = true;
//   };
}
})();