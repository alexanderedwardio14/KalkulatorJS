const calculator = document.querySelector('.calculator');
const keys = document.querySelector('.calculator_keys');
const display = document.querySelector('.calculator_display');

keys.addEventListener('click', e => {
    if (e.target.matches('button')){
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;
        const previousKeyType = calculator.dataset.previousKeyType;


        if (!action) {
            if (!action) {
                if (displayedNum === '0'|| previousKeyType === 'operator') {
                  display.textContent = keyContent
                  calculator.dataset.previousKeyType = '0' //for reset
                } else {
                  display.textContent = displayedNum + keyContent
                }
            }
        }
        if (
            action === 'add' ||
            action === 'subs' ||
            action === 'mult' ||
            action === 'divide'
        ) {
            key.classList.add('is-depressed')
            calculator.dataset.previousKeyType = 'operator'
            calculator.dataset.firstValue = displayedNum
            calculator.dataset.operator = action

        }
          if (action === 'decimal') {
            display.textContent = displayedNum + '.'
          }
          
          if (action === 'clear') {
            console.log('clear key!');
          }
          
          if (action === 'calculate') {
            const firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            const secondValue = displayedNum
          
            display.textContent = calculate(firstValue, operator, secondValue)          

          }
          Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'))

    }
    
})

const calculate = (n1, operator, n2) => {
    let result = ''
  
    if (operator === 'add') {
      result = parseFloat(n1) + parseFloat(n2)
    } else if (operator === 'subs') {
      result = parseFloat(n1) - parseFloat(n2)
    } else if (operator === 'mult') {
      result = parseFloat(n1) * parseFloat(n2)
    } else if (operator === 'divide') {
      result = parseFloat(n1) / parseFloat(n2)
    }
  
    return result
  }
  