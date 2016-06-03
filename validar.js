

var app = angular.module('formApp', []);
 
  app.controller('Main', function ($scope) {
    $scope.formData = {};

$scope.submitForm = function (formData) {
    alert('Form submitted with' + JSON.stringify(formData));
  };

  });


  function validar_clave(){ 
    clave1 = document.login_container.contraseña.value 
    clave2 = document.login_container.rcontraseña.value 

    if (clave1 == clave2) 
        alert("Las dos claves son iguales...\nRealizaríamos las acciones del caso positivo") 
    else 
        alert("Las dos claves son distintas...\nRealizaríamos las acciones del caso negativo") 
} 



 