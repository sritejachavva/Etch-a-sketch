

/************* Create Divs *************/

function createDivs()
{
    let emptyGrid = document.createElement('div');
    emptyGrid.classList.add('container');
    emptyGrid.style.cssText = 'border-style: solid; border-radius:10px; width:fit-content;'
    document.body.appendChild(emptyGrid);
    let emptyRow = document.createElement('div');
    emptyRow.classList.add('row');
    emptyRow.style.cssText = 'display:flex;'

    let emptyCell = document.createElement('div');
    emptyCell.classList.add('cell');
    emptyCell.style.cssText = 'background-color:black; width:0.1px; height: 0.1px; border-style: solid; opacity:0.0;'


    for (let i = 0; i < 64; i++) {
        let temprow = emptyRow.cloneNode(true);
        emptyGrid.appendChild(temprow);
        for (let j = 0; j < 64; j++){
            let tempcell = emptyCell.cloneNode(true);
            
            function increaseDarkness(tempCell){
                let cellOpacity = parseFloat(tempcell.style.getPropertyValue("opacity"));
                return cellOpacity + 0.3;
            }
            function fillCell(){
                newOpacity= increaseDarkness(tempcell);
                console.log("test");
                tempcell.style.cssText = `width:0.1px; height: 0.1px; border-style: solid; background-color:black; opacity:${newOpacity}`
            }

            tempcell.addEventListener('mouseover', fillCell)
            temprow.appendChild(tempcell);
        }
        
      }
       
}

createDivs();