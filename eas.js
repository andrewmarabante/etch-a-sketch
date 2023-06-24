const grid = document.querySelector('.grid');
for(i=0;i<=255;i++){
        const gridblock = document.createElement('DIV')
        gridblock.addEventListener('mouseover',changeColor)
        gridblock.addEventListener('mousedown',changeColor)
        grid.appendChild(gridblock);
    }


let click = false;
document.onmousedown = () => {click = true};
document.onmouseup = () => {click = false};

function changeColor(e)
{
    if(e.type === 'mouseover' && !click) return
    else if(e.type === 'mouseover' && click){
    e.target.style.backgroundColor = 'black';
    }
}
