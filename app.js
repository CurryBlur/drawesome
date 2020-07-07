let colorToggle = true
let gridSize = 16

function buildGrid (numRows) {
    const grid = document.querySelector('#grid')
    
    // Clean out previous grid
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }

    for(let i = 1; i <= numRows; i++){
        for(let j = 1; j <= numRows; j++){
            const div = document.createElement('div');
            div.classList.add('grid-square')
            div.style.cssText = `grid-column: ${j}; grid-row: ${i}`
            if (colorToggle) {
                div.addEventListener("mouseover", setRandomColor)
            } else {
                div.addEventListener("mouseover", darkenColor)
            }
            grid.appendChild(div)
        }
    }
}

function setRandomColor() {
    const colors = 255
    this.style.backgroundColor = `rgb(${randomNum(colors)},${randomNum(colors)},${randomNum(colors)})`
}

function darkenColor(){
    let currentColor = window.getComputedStyle(this, null).getPropertyValue('background-color')
    console.log(currentColor)
    let colorparts = parseInt(currentColor.split("(")[1].split(',')[0])
    colorparts = Math.max(colorparts-35, 0)
    console.log(colorparts)
    this.style.backgroundColor = `rgb(${colorparts},${colorparts},${colorparts})`
}

function randomNum(outOfNum){
    /**
     * Returns a random whole number between 0 and outOfNum
     */

    return Math.floor(Math.random()*outOfNum)
}

buildGrid(gridSize)
const resetButton = document.querySelector('#reset')
const colorButton = document.querySelector('#colorful')
const grayButton = document.querySelector('#grayscale')

resetButton.addEventListener('click', () => {
    let num = prompt('How many rows would you like in the grid?')
    gridSize = Math.min(num, 100)
    buildGrid(gridSize)
})

colorButton.addEventListener('click', () => {
    colorToggle = true
    buildGrid(gridSize)
})

grayButton.addEventListener('click', () => {
    colorToggle = false
    buildGrid(gridSize)
})