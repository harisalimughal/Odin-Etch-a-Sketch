const gridContainer = document.getElementById('grid-container');
const btn = document.getElementById('create-grid');
const containerSize = 960;

function clearGrid() {
    gridContainer.innerHTML = ''; 
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let userInput;
function grid(userInput){

    clearGrid();

    const gridSize = parseInt(userInput); // Convert input to integer
    if (isNaN(gridSize) || gridSize <= 0 || gridSize>100) {
        alert("Please enter a valid number between 0 and 100");
        return;
    }

    const squareSize = containerSize / gridSize;



    for(i=0; i<gridSize*gridSize; i++){
    const square=document.createElement("div");
    square.classList.add('grid-item')
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    square.addEventListener('mouseover', function() {
        square.style.backgroundColor = getRandomColor(); 
    });

    gridContainer.appendChild(square)
}

 }

 btn.addEventListener('click', () => {
    const userInput = prompt('Enter the number of squares per side for the grid:');
    grid(userInput);
});


