class Calculator {
    constructor(PreviousOperand, CurrentOperand) {
        this.PreviousOperand = PreviousOperand
        this.CurrentOperand = CurrentOperand
        this.clear()
    }

    clear() {
        this.PreviousOperandElement = ''
        this.CurrentOperandElement = ''
        this.operation = undefined
    }

    delete() {

    }

    Append(number) {
        if(number === '.' && this.CurrentOperandElement.includes('.')) return
        this.CurrentOperandElement = this.CurrentOperandElement.toString() + number.toString()
    }

    SelectOperation(operation) {

    }

    compute() {

    }

    UpdateDisplay() {
        this.CurrentOperand.innerText = this.CurrentOperandElement
        this.PreviousOperand.innerText = this.PreviousOperandElement
    }
}

const RippleButton = document.querySelectorAll('.ripple')
const toggleBtn = document.querySelector('.toggle-btn');
const Body = document.getElementById('body')
const NumberedButton = document.querySelectorAll('[data-number]')
const OperationButton = document.querySelectorAll('[data-operation]')
const AllClear = document.querySelector('[data-all-clear]')
const DeleteButton = document.querySelector('[data-delete]')
const EqualsButton = document.querySelector('[data-equal]')
const PreviousOperand = document.querySelector('[data-previous-operand]')
const CurrentOperand = document.querySelector('[data-current-operand]')


const calculator = new Calculator(PreviousOperand, CurrentOperand)

NumberedButton.forEach(button => {
    button.addEventListener('click', ()=> {
        calculator.Append(button.innerText)
        calculator.UpdateDisplay()
    })
})

AllClear.addEventListener('click', ()=> {
        calculator.clear()
        calculator.UpdateDisplay()
})

toggleBtn.addEventListener('click', ()=> {
    if(toggleBtn.classList.contains('toggle-center')) {
        console.log("hellor")
        toggleBtn.classList.toggle('toggle-right')
        Body.classList.toggle('theme-3')
    }

})

toggleBtn.addEventListener('click', ()=> {
    toggleBtn.classList.toggle('toggle-center');
    Body.classList.toggle('theme-2')
    
})



// Basic Ripple and Click Effect 
RippleButton.forEach(ripples => {
    ripples.addEventListener('click', function(e) {
        let x = e.clientX - e.target.offsetLeft;
             let y = e.clientY - e.target.offsetTop;
             let ripple = document.createElement("span");
             ripple.style.left = `${x}px`;
             ripple.style.top = `${y}px`;
             this.appendChild(ripple);
             setTimeout(function(){
               ripple.remove();
             }, 600);
    })
})

