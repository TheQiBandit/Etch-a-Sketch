let main = document.querySelector("body");
main.style.backgroundColor = "black";

let container = document.querySelector(".container");
let sketchPad = document.createElement("div");

function generateGrid() {
    let tempElem = new DocumentFragment();
    let gridNum = 256;
    
    for (let i = 0; i < gridNum; i++) {
        
        let divElem = document.createElement("div");
        divElem.classList.add("sbox");

        tempElem.appendChild(divElem);
    };

    container.appendChild(tempElem); 
    
};

generateGrid();

container.addEventListener("click", function(e) {
    if (e.target.classList.contains('sbox')) {
        alert("Voila!")
    }
});




