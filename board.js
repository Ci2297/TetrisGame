class Board { 
    constructor(ctx) {
      this.ctx = ctx;    
    } 
  

  getEmptyBoard() {
    return Array.from(
      {length: ROWS}, () => Array(COLS).fill(0)
    );
  }
}

function play() {
    Board = new Board(ctx);
    console.table(Board.grid);
  }
