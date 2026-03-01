const container = document.querySelector('#container');
const resetBtn = document.querySelector('#reset-btn');

function createGrid(squaresPerSide) {
    container.textContent = ''; // Clear existing grid
    const totalSquares = squaresPerSide * squaresPerSide;
    const squareSize = 960 / squaresPerSide;

    for (let i = 0; i < totalSquares; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        div.style.width = `${squareSize}px`;
        div.style.height = `${squareSize}px`;

        // Extra Credit: Set initial opacity for darkening effect
        div.style.opacity = '0.1';

        div.addEventListener('mouseover', () => {
            // Extra Credit: Randomize RGB
            const randomR = Math.floor(Math.random() * 256);
            const randomG = Math.floor(Math.random() * 256);
            const randomB = Math.floor(Math.random() * 256);
            div.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;

            // Extra Credit: Progressive Darkening (+10% opacity)
            let currentOpacity = parseFloat(div.style.opacity);
            if (currentOpacity < 1) {
                div.style.opacity = (currentOpacity + 0.1).toString();
            }
        });

        container.appendChild(div);
    }
}

resetBtn.addEventListener('click', () => {
    let size = prompt("Enter number of squares per side (max 100):");
    size = parseInt(size);

    if (isNaN(size) || size < 1 || size > 100) {
        alert("Please enter a valid number between 1 and 100.");
    } else {
        createGrid(size);
    }
});

// Initialize with default 16x16 grid
createGrid(16);