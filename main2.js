function trainingScore(name){
     this.name=name.setTimer;
     this.paste='name';

     this.new=function (){
     	this.percentCorrectAnswer=0;
     	this.correctReturn=0;
     	this.meanTimeCount=0;
     	this.invalidReturn=0;
     	this.timeArray=[];
     	this.sign='*';
     	this.optionDo=false;
     	this.comment='Введите ответ';
     }

     this.setValues=function (){
	     var firstValue=randomNumberBefore10();
	     var secondValue=randomNumberBefore10();
	     var sign=randomNumberBefore10();
	     if (sign<4){
	        this.firstValue=firstValue;
	        this.sign='*';
	        this.secondValue=secondValue;        
	     }else if (sign<6){
	        this.firstValue=firstValue*secondValue;
	        this.sign='/';
	        this.secondValue=secondValue;        
	     }else if (sign<8){
	        this.firstValue=firstValue;       
	        this.sign='+';
	        this.secondValue=secondValue;
	     }else {
	        this.firstValue=firstValue+secondValue;       
	        this.sign='-';
	        this.secondValue=secondValue;
	     }     
     
     }

     this.inputReturn = function () {
     
		     if (this.sign=='*'){
		        var correctAnsver=this.firstValue*this.secondValue;
		     }else if (this.sign=='/'){
		        var correctAnsver=this.firstValue/this.secondValue;
		     }else if (this.sign=='+'){
		        var correctAnsver=this.firstValue+this.secondValue;
		     }else if (this.sign=='-'){
		        var correctAnsver=this.firstValue-this.secondValue;
		     }
		     
		     var invalidAnsver=this.valueReturn;

		     if (correctAnsver!=invalidAnsver){
		       this.comment='Неправильно! Ответ - '+this.firstValue+this.sign+this.secondValue+'='+correctAnsver+' a не '+invalidAnsver+'!'; //+'  '+$scope.invalidAnsver;  //+'  '+$scope.invalidReturn;
		       //if ($scope.invalidAnsver != undefined){
		         this.invalidReturn++;
		       //}
		       
		     }else{
		       this.comment='Правильно! '+this.firstValue+this.sign+this.secondValue+'='+correctAnsver;
		       this.correctReturn++;
		       
		       
		     }
		     this.returnValue=invalidAnsver;
		     this.valueReturn='';
		     console.log(this.firstValue+'  '+this.sign+'  '+this.secondValue+'  '+correctAnsver+' '+invalidAnsver);
		     //console.log(this.sign+'  '+this.secondValue+'  '+this.correctAnsver+' '+this.invalidAnsver);

		    
		     this.setValues();
	}

 
}

  function randomNumberBefore10(){
    var returnRandom=0;
    while ((returnRandom == 0) || (returnRandom == 1)){
      var returnRandom=(Math.random()*10)^0;
    }      
      return returnRandom
  }

function f1(){
	alert('kkk')
}
