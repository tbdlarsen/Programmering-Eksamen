//Rook som er nedarvet af pawn
class Rook extends Piece{

    //Rook constructor
    constructor(x,y){

        //Super() bliver brugt til at fremkalde contructoren fra Pawn (Forældre), hvilket gør at der er tiladselse til brugen af Pawn constructorens egenskaber 
        super(x,y);

        //Lokation i forhold til spritesheet (justeret med 0,025 for at brikkerne står perfekt i midtel af deres felt)
        this.piece = 4.025;
        
    }

    Movement(x,x2,y,y2){

      let absX = abs(x2-x);
      let absY = abs(y2-y);

       //1:4 (N)
      if((this.x + this.grid)/this.grid == x2 && (this.y + this.grid)/this.grid == y2 && x2-x == 0 && y2-y >= 1) {
        this.y -= (absY)*this.grid; 
      }

      //2:4 (V)
      if((this.x + this.grid)/this.grid == x2 && (this.y + this.grid)/this.grid == y2 && x2-x >= 1 && y2-y == 0) {
        this.x -= (absX)*this.grid; 
      }
        
      
      //3:4 (Ø)
      if((this.x + this.grid)/this.grid == x2 && (this.y + this.grid)/this.grid == y2 && x2-x <= -1 && y2-y == 0) {
        this.x += (absX)*this.grid;
        
      }
      
      //4:4 (S)
      if((this.x + this.grid)/this.grid == x2 && (this.y + this.grid)/this.grid == y2 && x2-x == 0 && y2-y <= -1) {
        this.y += (absY)*this.grid; 
      }





    }
   
}


