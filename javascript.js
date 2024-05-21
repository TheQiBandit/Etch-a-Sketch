
let container = document.querySelector(".container");

function generateGrid(e = 256) {
    let tempElem = new DocumentFragment();
    let gridNum = e;
    
    for (let i = 0; i < gridNum; i++) {
        
        let divElem = document.createElement("div");
        divElem.classList.add("box");

        tempElem.appendChild(divElem);
    };

    container.appendChild(tempElem); 
    
};

generateGrid();

container.addEventListener("mouseover", event => {
    if (event.target.classList.contains('box')) {
        event.target.style.backgroundColor = "red";
    }
});




