const grid = document.querySelector('.grid');
const r1 = document.querySelector('.row1');
const r2 = document.querySelector('.row2');
const r3 = document.querySelector('.row3');
const r4 = document.querySelector('.row4');
for(i=0;i<=15;i++)
    {
        if(i>=0 && i<=3)
        {
            const row1 = document.createElement('DIV')
            r1.appendChild(row1)
        }
        if(i>=4 && i<=7)
        {
            const row2 = document.createElement('DIV')
            r2.appendChild(row2)
        }
        if(i>=8 && i<=11)
        {
            const row3 = document.createElement('DIV')
            r3.appendChild(row3)
        }
        if(i>=12 && i<=15)
        {
            const row4 = document.createElement('DIV')
            r4.appendChild(row4)
        }
    }
