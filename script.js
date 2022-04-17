let container = document.getElementsByClassName("container");
let boxPerSize = prompt('Welcome to Etch-a-Scetch! What size of brush do you want? Choose from 10 to 100.', 16);;
let totalBoxes = boxPerSize ** 2;
let widthHeigth = 500 / boxPerSize;

// Create grid of blocks it the big box.
for(let x=0; x<totalBoxes; x++) {
    let box = document.createElement('div');
    box.style.width = `${widthHeigth}px`;
    box.style.height = `${widthHeigth}px`;
    box.style.backgroundColor = "#ffffff";
    box.className = "square";
    document.getElementById('box').appendChild(box);
}

let boxes = document.getElementsByClassName("square");

// When mouseover, blocks changes their color.
for (const box of boxes) {
  box.addEventListener('mouseover', function mouseOver() {
    box.style.backgroundColor = "#000000";
  })
}

let button = document.createElement('button');
button.className = "clear";
button.innerHTML = "Clear All";
document.body.appendChild(button);

// When button "Clear All" clicked, window reloads.
button.onclick = function(){
    window.location.reload();
}








