const grid = document.querySelector('.grid');
for(i=0;i<=255;i++)
    {
        const gridblock = document.createElement('DIV')
        gridblock.addEventListener('mouseover',changeColor)
        grid.appendChild(gridblock);
    }
function changeColor(e){
    e.target.style.backgroundColor = 'black';
}