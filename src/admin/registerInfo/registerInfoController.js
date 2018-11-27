(function(){
    'use strict'

    angular.module('admin')
.controller('RegistrationInfoController', RegistrationInfoController);

RegistrationInfoController.$inject=['MenuService'];
function RegistrationInfoController(MenuService) {
  var ctrl = this;
  ctrl.Data="";
  ctrl.count=0;
  ctrl.menuItemDetail="";
  for(var i in MenuService.userData){
    ctrl.count++;
   }
   console.log(ctrl.count);
  if(ctrl.count>0){
   ctrl.Data=MenuService.userData;
   
    var promise=MenuService.getCategories();
    promise.then(function(response){
        for(var i=0; i<response.length;i++){
          if(response[i].short_name==ctrl.Data.favoritedish.toUpperCase()){
            ctrl.menuItemDetail=response[i];
          }
        }
        
        if(response.menu_items.length>0){
          ctrl.menuitems= response.menu_items;
        }
    });
    }
  else{
   ctrl.Data="";
  }
}
})();
