const grid = document.querySelector('.grid');
const size = document.getElementById('size');
const clear = document.getElementById('clear');
const red =document.getElementById('red')
const blue =document.getElementById('blue')
const green =document.getElementById('green')
const black =document.getElementById('black')
const erase =document.getElementById('eraser')
size.addEventListener('click', changeSize);
red.addEventListener('click',colorRed);
blue.addEventListener('click',colorBlue);
green.addEventListener('click',colorGreen);
erase.addEventListener('click',eraser);
black.addEventListener('click',colorBlack)
let currentSize;
let currentColor;
let click = false;
document.onmousedown = () => {click = true};
document.onmouseup = () => {click = false};
clear.addEventListener('click',reset);

for(i=0;i<=255;i++){
        const gridblock = document.createElement('DIV')
        gridblock.addEventListener('mouseover',changeColor)
        gridblock.addEventListener('mousedown',changeColor)
        grid.appendChild(gridblock);
    }
function changeColor(e)
{
    if(e.type === 'mouseover' && !click) return
    else if(e.type === 'mouseover' && click){
    e.target.style.backgroundColor = `${currentColor}`;
    }
}

function changeSize(e)
{
    let newsize = prompt('Please Select a Grid Size (Up to 100)');
    if (newsize<=100 && newsize>0)
    {
    grid.innerHTML='';
    grid.style.gridTemplateColumns = `repeat(${newsize}, auto)`
    grid.style.gridTemplateRows = `repeat(${newsize}, auto)`
    for(i=1;i<=newsize*newsize;i++){
        const gridblock = document.createElement('DIV');
        gridblock.addEventListener('mouseover',changeColor);
        gridblock.addEventListener('mousedown',changeColor);
        grid.appendChild(gridblock);
        currentSize=newsize;
        }
    }
    else { alert('Invalid Response! Try again.') }
}

function reset()
{
grid.innerHTML=''
grid.style.gridTemplateColumns = `repeat(${currentSize}, auto)`
grid.style.gridTemplateRows = `repeat(${currentSize}, auto)`
for(i=1;i<=currentSize*currentSize;i++){
    const gridblock = document.createElement('DIV');
    gridblock.addEventListener('mouseover',changeColor);
    gridblock.addEventListener('mousedown',changeColor);
    grid.appendChild(gridblock);
    }
}

function colorRed()
{
    currentColor = 'red';
}

function colorBlue()
{
    currentColor = 'blue';
}

function colorGreen()
{
    currentColor = 'green';
}

function eraser()
{
    currentColor = 'white';
}

function colorBlack()
{
    currentColor = 'black';
}
