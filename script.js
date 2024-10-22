let click = true;

// default color
const colorDiv = (e) => {
    if (click) {                                    // function colorDiv() {
        e.target.style.backgroundColor = 'red';     //     this.style.backgroundColor = "black"; // You could use this or left
    }                                               // }
};

// when we click in the body will stop the coloring
document.querySelector("body").addEventListener('click', (e)=> {
    if (e.target.tagName != 'BUTTON') {
        click = !click;
        document.querySelector('.mode').textContent = click ? 'Mode: Coloring' : 'Mode: Not Coloring';
    }
})

// change color divs
const changeToRed = () => {
    const divs = document.querySelectorAll("#container div"); // other alternative 
    divs.forEach(div => {
        div.addEventListener("mouseover", (e)=> {
            if (click) {   // check if we click then stop coloring
                e.target.style.backgroundColor = "red";
            }
        })
    })
};
const changeToRandomColor = () => {
    const divs = container.querySelectorAll("div"); // other alternative
    divs.forEach(div => {
        div.addEventListener("mouseover", (e)=> {
            if (click) {    // check if we click then stop coloring
                e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
            }
        })
    })
};
const changeToBlack = () => {
    const divs = document.querySelectorAll("#container div");
    divs.forEach(div => {
        div.addEventListener("mouseover", (e)=> {
            if (click) {    // check if we click then stop coloring
                e.target.style.backgroundColor = "black";
            }
        })
    })
};


// set automatic for size grid
const getGrid = (size) => {
    const container = document.getElementById("container");
    const allNewDivs = container.querySelectorAll("div");
    allNewDivs.forEach((div) => div.remove());

    container.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    container.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    let amount = size * size;
    for(let i = 0; i < amount; i++) {
        const newDiv = document.createElement("div");
        newDiv.addEventListener("mouseover", colorDiv);
        newDiv.style.backgroundColor = "white";
        container.appendChild(newDiv);
        // container.insertAdjacentElement("beforeend", newDiv); // you can use this too
    }

}
getGrid(16);

// change size of grid between 2 until 100
const changeSizeGrid = () => {
    let gridInput = prompt("set between 2 and 100", 16);
    if (gridInput < 2 || gridInput > 100) {
        alert("Please input number between 2 and 100");
    } else {
        getGrid(gridInput)
    }
}

// clear the colors
const resetGrid = () => {
    const container = document.getElementById("container");
    const allNewDivs = container.querySelectorAll("div");
    allNewDivs.forEach((div) => div.style.backgroundColor = "white");
}




document.getElementById("change-grid").addEventListener("click", changeSizeGrid);

document.getElementById("default-color").addEventListener("click", changeToRed);
document.getElementById("random-color").addEventListener("click", changeToRandomColor);
document.getElementById("dark-color").addEventListener("click", changeToBlack);

document.getElementById("reset").addEventListener("click", resetGrid);