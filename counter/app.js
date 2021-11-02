const increaseBtn = document.getElementById('increase-btn')

let counter = 0

function increase() {
    const value = document.getElementById('value')
    counter++
    value.textContent = counter
    if (counter > 0) value.style = 'color:blue'
    if (counter == 0) value.style = 'color:black'
}

increaseBtn.addEventListener('click', increase)
console.log(value.style)

const decreaseBtn = document.getElementById('decrease-btn')

function decrease() {
    const value = document.getElementById('value')
    counter--
    value.textContent = counter
    if (counter < 0) value.style = 'color:red'
    if (counter == 0) value.style = 'color:black'
}

decreaseBtn.addEventListener('click', decrease)
console.log(value.style)

const resetBtn = document.getElementById('reset-btn')

function reset() {
    const value = document.getElementById("value")
    counter = 0
    value.textContent = counter
    if (counter == 0) value.style = "color:black"

}

resetBtn.addEventListener("click", reset)
console.log(value.style)