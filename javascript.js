
let container = document.querySelector(".container");

function generateGrid(e = 16) {
    let tempElem = new DocumentFragment();
    let gridNum = e * e;
    
    for (let i = 0; i < gridNum; i++) {
        
        let divElem = document.createElement("div");
        divElem.classList.add("box");

        tempElem.appendChild(divElem);
    };

    container.appendChild(tempElem); 
    
};

let userGrid = generateGrid(parseInt(prompt("Enter a number from 1-100")))
generateGrid();

function randomizeNum(num) {
    return Math.floor(Math.random() * num); 
};

function randomizeRGB() {
    let rndmColor = `rgb(${randomizeNum(255)} ${randomizeNum(255)} ${randomizeNum(255)})`;
    return rndmColor;
}

container.addEventListener("mouseover", event => {
    if (event.target.classList.contains('box')) {
        event.target.style.backgroundColor = randomizeRGB();
    }
});