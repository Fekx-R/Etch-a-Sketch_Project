// set automatic for size grid
let getGrid = (size) => {
    const container = document.getElementById("container");
    const allNewDivs = container.querySelectorAll("div");
    allNewDivs.forEach((div) => div.remove());
    
    container.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    container.style.gridTemplateRows = `repeat(${size} , 1fr)`;


    let amount = size * size;
    for(let i = 0; i < amount; i++) {
        const newDiv = document.createElement("div");
        newDiv.style.backgroundColor = "blue";
        container.insertAdjacentElement("beforeend", newDiv);
    }

}
getGrid(16);

// change size of grid between 2 until 100
let changeSizeGrid = () => {
    let gridInput = prompt("set between 2 and 100", 16);
    if (gridInput < 2 || gridInput > 100) {
        alert("Please input number between 2 and 100");
    } else {
        getGrid(gridInput)
    }
}





document.getElementById("change-grid").addEventListener("click", changeSizeGrid)