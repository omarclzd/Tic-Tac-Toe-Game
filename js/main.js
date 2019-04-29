/*----- constants -----*/ 
const COLORS = {
    '1': 'X',
    '-1': 'O',
    '0': null,
};



/*----- app's state (variables) -----*/ 
var board, winner, turn;



/*----- cached element references -----*/ 
const msgEl = document.getElementById('msg');



/*----- event listeners -----*/ 

document.getElementById('sec-marker').addEventListener('click', handleClick);
document.getElementById('reset').addEventListener('click', init);



/*----- functions -----*/
init();

function handleClick(evt) {
    const square = evt.target;
    

    //const colIdx = parseInt(square.id.replace('col', ''));
        
       if (turn == 1 && square.innerHTML !== COLORS[-1]) {
        square.innerHTML = COLORS[1];

    } else { if (turn == -1 && square.innerHTML !== COLORS[1]) {
        square.innerHTML = COLORS[-1];
    } 
    }

    turn *= -1;
    
    
    if (rowIdx === -1) return;
    console.log(evt.target);
    board[colIdx] = turn;
    //winner = getWinner();
    render();
    

}









function render() {
    //Display the board
    board.forEach(function(colArr, colIdx) {
        colArr.forEach(function(cell, rowIdx) {
            const div = document.getElementById(`c${colIdx}r${rowIdx}`);
            div.innerHTML = COLORS[cell];
        });
    });
    //Display message
    /*if (winner) {
        if (winner === 'T') {
            msgEl.textContent = "It's a Tie!";
        } else {
           
        } 
     } else {
        msgEl.textContent = `${COLORS[turn].toUpperCase()}'s Turn`;
    }*/

}

function init() {
    board = [
        [0, 0, 0],  // column 1
        [0, 0, 0],  // column 2
        [0, 0, 0],  // column 3
        
    ];
    winner = null;
    turn = 1;
    render();
}