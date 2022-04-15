let container = document.getElementsByClassName("container");
let sizePerSize = 256;
for(let x=0; x<sizePerSize; x++) {
    let box = document.createElement('div');
    box.className = "square";
    document.getElementById('box').appendChild(box);
}

let boxes = document.getElementsByClassName("square");

for (const box of boxes) {
  box.addEventListener('mouseover', function mouseOver() {
    box.style.backgroundColor = "#000000";
    console.log('box clicked');
  });
}

let button = document.createElement('button');
button.className = "clear";
button.innerHTML = "Clear All";
document.body.appendChild(button);

button.onclick = function(){
    window.location.reload();
    result = prompt('How many squares per side do you want? 100 - is max!', 16);    
};


