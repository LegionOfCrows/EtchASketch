document.addEventListener("DOMContentLoaded", () => {

const container = document.getElementById('container');
let sideLength = 16
createGrid(sideLength);
})

function createGrid(sideLength){
const containerWidth = document.getElementById('container').clientWidth
console.log(containerWidth)
const cellSize = (containerWidth/sideLength) - 2;
for (let index = 0; index <sideLength; index++) {
    for (let j = 0; j <sideLength; j++){
        let drawCell = document.createElement("div");
        drawCell.classList.add("drawCell");
        drawCell.style.width = `${cellSize}px`;
        drawCell.style.height = `${cellSize}px`;
        container.appendChild(drawCell);

    }
    
}}
