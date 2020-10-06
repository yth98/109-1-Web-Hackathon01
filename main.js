var cells = document.getElementsByClassName("date")
var input = document.getElementById("cal-input")
var color = document.getElementById("cal-color")
var button = document.getElementById("cal-button")
input.value = ''
color.value = '#b0b0b0'

var activeCell;

button.onclick = () => {
    if(activeCell instanceof HTMLElement) {
        something = document.createElement('div');
        something.innerText = input.value;
        something.style.color = color.value;
        activeCell.appendChild(something);
    }
}

document.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') button.onclick();
});

const selectCell = (e) => {
    activeCell = e.target;
    for(cell of cells) {
        cell.classList.remove('active-date');
    }
    e.target.classList.add('active-date');
    input.value = '';
}

window.onload = () => {
    for(cell of cells) {
        cell.onclick = selectCell;
    }
    activeCell = cells[0];
    cells[0].classList.add('active-date');
}

//Sets the page's theme. No need to modify
var themeButton = document.getElementsByClassName("ChooseTheme")
for(var i=0; i<themeButton.length; ++i) {
    themeButton[i].addEventListener('click', e => {
        document.body.setAttribute('class', e.target.id)
    }, false)
}