const colors = ["Red", "Green", "Blue"];

class Grid {
    constructor(){
        this.setclassList.add("grid");
    }

}

function createGrid(n){
    let grid = document.createElement("div");
    grid.classList.add("grid"); 
    grid.style.backgroundColor = `rgb(${Math.random()*256} ${Math.random()*256} ${Math.random()*256})`;

    for (let i = 0; i < n; i++) {
       let square = document.createElement("div");
       square.classList.add("grid_square");
       grid.appendChild(square); 
    }
    
    return grid;
}

function resetGrid(){
    let grid = document.querySelector(".grid");
    while(grid.firstChild){
        grid.firstChild.remove();
    }
}


function createPage(){
    document.body.appendChild(createGrid(2));

    let grid = document.querySelector(".grid");
    let button = document.createElement("button");
    
    button.classList.add("reset_button");
    button.textContent = "Reset";
    button.addEventListener("onClick", ()=> {
        resetGrid();
    })
    
    grid.appendChild(button);
}

createPage();