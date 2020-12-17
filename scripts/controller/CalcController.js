class CalcController {

  constructor(){
    // O uso do _ que dizer que o atributo só pode ser usado pela CalcController
     this._displayCalcEl = document.querySelector("#display");
     this._dateEl = document.querySelector("#data");
     this._timeEl = document.querySelector("#hora");
     this._currentDate;
     this.initialize(); 
     this._locale = 'pt-BR';

    }

  initialize(){
          this.setdisplayDateTime();

    //Função executada em um intervalo de tempo
    // => Arrow Function, um novo recurso para criação de funções
    setInterval(()=>{
        this.setdisplayDateTime();
    },1000)
  }

  setdisplayDateTime(){
    this.displayDate = this.currentDate.toLocaleDateString(this._locale);
    this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
  }

    set displayTime(valor){
        this._timeEl.innerHTML = valor
    }

    get displayTime(){
        return  this._timeEl.innerHTML;
    }

    set displayDate(valor){
        this._dateEl.innerHTML = valor; 
    }

    get displayDate(){
        return this._dateEl.innerHTML; 
    }

    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value){
        this._displayCalcEl.innerHTML = value;
    }

    get currentDate(){
        return new Date();
    }

    set currentDate(valor){
        this.__currentDate = valor;
    }


}