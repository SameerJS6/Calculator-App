class Calculator {
    constructor(PreviousOperand, CurrentOperand) {
        this.PreviousOperand = PreviousOperand
        this.CurrentOperand = CurrentOperand
        this.clear()
    }

    clear() {
        this.PreviousOperandElement = ''
        this.CurrentOperandElement = ''
        this.operation = ''
    }

    delete() {
        this.CurrentOperandElement = this.CurrentOperandElement.toString().slice(0, -1)
    }

    Append(number) {
        if(number === '.' && this.CurrentOperandElement.includes('.')) return
        this.CurrentOperandElement = this.CurrentOperandElement.toString() + number.toString()
    }

    SelectOperation(operation) {
        if(this.CurrentOperandElement === '') return 
        if(this.PreviousOperandElement != '') {
            this.compute()
        }
        this.operation = operation  
        this.PreviousOperandElement = this.CurrentOperandElement
        this.CurrentOperandElement = ''
    }

    compute() {
        let computation 
        const previous = parseFloat(this.PreviousOperandElement)
        const current = parseFloat(this.CurrentOperandElement)
        if(isNaN(previous) || isNaN(current)) return 

        switch(this.operation) {
            case "+": computation = previous + current
            break;
            case "-": computation = previous - current
            break;
            case "*": computation = previous * current
            break;
            case "÷": computation = previous / current
            break;
            // case "%": computation = (previous / current) * 100
            // break;  Another way of percentage (Previous is what percent of Current)
            case "%": computation = (previous / 100) * current
            break;  //(Previous percent of Current) Google Calculator Uses this Method to calculate Percentage.
            default: return
        }

        this.CurrentOperandElement = computation
        this.operation = ''
        this.PreviousOperandElement = ''
    }

    GetDisplay(number) {
        const stringNumber = number.toString()
        const IntergerDigit = parseFloat(stringNumber.split('.')[0])
        const DecimalDigit = stringNumber.split('.')[1]
        let IntergerDisplay

        if(isNaN(IntergerDigit)) {
            IntergerDisplay = ''
        } else {
            IntergerDisplay = IntergerDigit.toLocaleString('en', {maximumFractionDigits: 0})
        }

        if(DecimalDigit != null) {
            return `${IntergerDisplay}.${DecimalDigit}`
        } else {
            return IntergerDisplay
        }
    }

    UpdateDisplay() {
        this.CurrentOperand.innerText = this.GetDisplay(this.CurrentOperandElement)
        // this.PreviousOperand.innerText = `${this.PreviousOperandElement} ${this.operation}`
        if(this.operation != null) {
            this.PreviousOperand.innerText = `${this.GetDisplay(this.PreviousOperandElement)} ${this.operation}`
        } else {
            this.PreviousOperandElement.innerText = ''
        }
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
OperationButton.forEach(operation => {
    operation.addEventListener('click', ()=> {
        // console.log(operation.innerText)
        calculator.SelectOperation(operation.innerText)
        calculator.UpdateDisplay()
    })
})
AllClear.addEventListener('click', ()=> {
        calculator.clear()
        calculator.UpdateDisplay()
})

DeleteButton.addEventListener('click', ()=> {
        calculator.delete()
        calculator.UpdateDisplay()
})

EqualsButton.addEventListener( 'click', ()=> {
    calculator.compute()
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

