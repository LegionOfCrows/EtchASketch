document.addEventListener("DOMContentLoaded", () => {

const container = document.getElementById('container');
let sideLength = 16
createGrid(sideLength);
})

function createGrid(sideLength){
// const containerWidth = document.getElementById('container').clientWidth
// console.log(containerWidth)
const cellSize = (960/sideLength) - 2.65;
for (let index = 0; index <sideLength; index++) {
    for (let j = 0; j <sideLength; j++){
        let drawCell = document.createElement("div");
        drawCell.classList.add("drawCell");
        drawCell.style.width = `${cellSize}px`;
        drawCell.style.height = `${cellSize}px`;
        drawCell.addEventListener("mouseover", () => changeColor(drawCell));
        container.appendChild(drawCell);

    }    
}}
function changeColor(cell){
    cell.style.backgroundColor = "green";
}