class CalcController {

  constructor(){
    // O uso do _ que dizer que o atributo só pode ser usado pela CalcController
     this._displayCalc = '0';
     this._currentDate;
     this.initialize(); 
  
    }

  initialize(){
       let displayCalcE1 = document.querySelector("#display");
       let dateE1 = document.querySelector("#data");
       let timeE1 = document.querySelector("#hora");
      
       displayCalcE1.innerHTML = "12345";
       timeE1.innerHTML = "12:00";
       dateE1.innerHTML = "25-01-1988";
    
    
    }

    get displayCalc(){
        return this._displayCalc;
    }

    set displayCalc(valor){
        this._displayCalc = valor;
    }


    get dataAtual(){
        return this._currentDate;
    }

    set dataAtual(valor){
        this._dataAtual = valor;
    }


}