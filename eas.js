const grid = document.querySelector('.grid');
const size = document.getElementById('size');
size.addEventListener('click', changeSize);
let click = false;
document.onmousedown = () => {click = true};
document.onmouseup = () => {click = false};


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
    e.target.style.backgroundColor = 'black';
    }
}

function changeSize(e)
{
    let newsize = prompt('Please Select a Grid Size (Up to 100)');
    if (newsize<=100 && newsize>0)
    {
    reset();
    grid.style.gridTemplateColumns = `repeat(${newsize}, auto)`
    grid.style.gridTemplateRows = `repeat(${newsize}, auto)`
    for(i=1;i<=newsize*newsize;i++){
        const gridblock = document.createElement('DIV');
        gridblock.addEventListener('mouseover',changeColor);
        gridblock.addEventListener('mousedown',changeColor);
        grid.appendChild(gridblock);
    }
    }
    else { alert('Invalid Response! Try again.') }
}

function reset()
{
grid.innerHTML=''
}