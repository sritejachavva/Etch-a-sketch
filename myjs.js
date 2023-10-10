

/************* Create Divs *************/
function selectMode(){
    let rainbowButton = document.querySelector('.rainbow-mode > .temp_button');
    let bool = true;
    let colorMode = 'normal';
    function toggleOnOff(){
        bool = !bool;
        if (bool == true){
            rainbowButton.style.cssText = 'background-color:#efefef';
            colorMode = 'normal';
            createDivs(colorMode);
        }
        else {
            colorMode = 'rainbow';
            rainbowButton.style.cssText = 'background: linear-gradient( 90deg, rgba(255, 0, 0, 1) 0%, rgba(255, 154, 0, 1) 10%, rgba(208, 222, 33, 1) 20%, rgba(79, 220, 74, 1) 30%, rgba(63, 218, 216, 1) 40%, rgba(47, 201, 226, 1) 50%, rgba(28, 127, 238, 1) 60%, rgba(95, 21, 242, 1) 70%, rgba(186, 12, 248, 1) 80%, rgba(251, 7, 217, 1) 90%, rgba(255, 0, 0, 1) 100% );';
            createDivs(colorMode);
        }
    }
    rainbowButton.addEventListener('click',toggleOnOff);
    rainbowButton.classList.add('button-clicked');
    createDivs(colorMode);
}

function createDivs(colorMode)
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
                console.log(`${colorMode}`);
                if (colorMode == 'normal'){
                    tempcell.style.backgroundColor = 'black';
                    tempcell.style.cssText = `width:0.1px; height: 0.1px; border-style: solid; opacity:${newOpacity}`
                } else if (colorMode == 'rainbow'){
                    const randomR = Math.floor(Math.random() * 256);
                    const randomG = Math.floor(Math.random() * 256);
                    const randomB = Math.floor(Math.random() * 256);
                    
                    tempcell.style.cssText = `width:0.1px; height: 0.1px; border-style: solid; opacity:${newOpacity}`
                    tempcell.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;

                }
                // tempcell.style.cssText = `width:0.1px; height: 0.1px; border-style: solid; background-color:black; opacity:${newOpacity}`
            }

            tempcell.addEventListener('mouseover', fillCell)
            temprow.appendChild(tempcell);
        }
        
      }
       
}

selectMode();

