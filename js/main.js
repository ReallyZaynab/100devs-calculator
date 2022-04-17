//all buttons have a smurf 
const buttons = document.querySelectorAll('.button')
const display =document.querySelector('#display')

buttons.forEach(button => {
  button.addEventListener('click',() =>
  {calculator.parseInput(button.value)
   console.log(button.value)
  })})

const calculator ={
  displayText:'0',
  prevTotal:null,

  parseInput(value){
    //have any of the special buttons been clicked
    switch(value){
      case '=':
        this.calcAnswer(this.displayText)
        console.log('equal')
        break;
      case 'ac':
        this.clearAll()
        break;
      case '.':
        if(this.displayText == 0){
          this.addText('0.')
        }else{
          this.addText('.')
        }
        break;
      default:
        this.addText(value)
    }
  },

  addText(value){
    
    if(this.displayText === '0'){
      this.displayText = ''
    }else if(this.prevTotal !== null){
      this.displayText = this.prevTotal
      this.prevTotal = null
    }
    
    if(isNaN(+(this.displayText.slice(-1))) && isNaN(+(value))){
      console.log('last char of display and new value are not numbers')
      this.displayText = this.displayText.slice(0,-1)
    }
    
    this.displayText += value
    console.log(this.displayText)
    this.outputText(this.displayText)
  },

  outputText(text){
    display.value = text
    this.displayText=0;
    this.prevTotal=null    
  },

  calcAnswer(equation){
    result = this.outputText(eval(equation))
    this.outputText(result)
  },

  clearAll(){
    this.displayText ='0'
    this.prevTotal=null
    this.outputText(this.displayText)
  },
  
}
