document.addEventListener("DOMContentLoaded", function() {

let body = document.body;

let sideLength = 16;

for (let index = 0; index <sideLength; index++) {
    for (let j = 0; index <sideLength; j++){
        let drawCell = document.createElement("div");
        drawCell.classList.add("drawCell");
        body.appendChild(drawCell)

    }
    
}})