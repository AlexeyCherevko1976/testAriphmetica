var app = angular.module('app', []);


app.controller('mainCtrl', function ($http, $scope) {
   
  
   $scope.setTimer='Включить таймер';
   $scope.nomer1=new trainingScore($scope);
   $scope.nomer1.new();
   $scope.nomer1.setValues();  

  $scope.setSelection = function (object) {
      if ($scope.setTimer=='Включить таймер'){
        object.new();
        object.optionDo=true;
        console.log(object.optionDo);
        $scope.setTimer='Выключить таймер'
        
         var n=0;        

        $scope.time1=setInterval(funcTime1, 1000 );
                function funcTime1() {                    
                    object.timeArray.push(n++);
                }
       
      }else{
         $scope.setTimer='Включить таймер';
         object.optionDo=false;
         
         clearInterval($scope.time1);
         console.log(object.timeArray+'  '+object.timeArray.length);
         object.percentCorrectAnswer=(object.correctReturn/(object.correctReturn+object.invalidReturn)*100)^0;
         object.meanTimeCount=(((object.correctReturn/object.timeArray.length)*100)^0)/100;
         
      }
  }

  $scope.checkkey = function (event, object) {
    
      if ((event.keyCode+'')=='13' && (object.optionDo==true)){
       
          object.inputReturn();
          console.log('object.optionDo='+object.optionDo) 

      }else if ((event.keyCode+'')=='13' && (object.optionDo!=true)){
           alert('Включите таймер!')
      }
   
  }

});
