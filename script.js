document.addEventListener("DOMContentLoaded", () => {

const container = document.getElementById('container');
let sideLength = 16
createGrid(sideLength);
})

function createGrid(sideLength){
for (let index = 0; index <sideLength; index++) {
    for (let j = 0; j <sideLength; j++){
        let drawCell = document.createElement("div");
        drawCell.classList.add("drawCell");
        container.appendChild(drawCell);

    }
    
}}