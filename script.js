document.addEventListener("DOMContentLoaded", () => {
    
const sizeButton = document.querySelector("#size");
sizeButton.addEventListener("click", () => {
    sideLength = prompt("Размер сетки:",[16]);
    if (sideLength > 100){
        alert("Слишком большое число");
    } else {
        removeGrid();
        createGrid(sideLength);
    }
})
const container = document.getElementById('container');
let sideLength = 16
createGrid(sideLength);
})

function createGrid(sideLength){
// const containerWidth = document.getElementById('container').clientWidth
// console.log(containerWidth)
const cellSize = (960/sideLength) - 2;
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
function removeGrid(){
    while (container.firstChild){
        container.removeChild(container.lastChild)
    }
}