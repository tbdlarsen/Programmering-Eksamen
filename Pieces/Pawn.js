class Pawn {
    constructor(x,y) {
        //spritesheet
        this.spritesheet;
       
        //størrelse på spritesheet
        this.billedWidth = 640;
        this.billedHeight = 213;



        //position af billede og brik
        this.x = x;
        this.y = y;

    }

    //Visual funktion som viser en del af spritesheetet. 
    visual(color, piece) {    
        image(spritesheet,this.x,this.y,this.billedWidth/6,this.billedHeight/2,
        piece*(this.billedWidth/6),color*(this.billedHeight/2),1*(this.billedWidth/6),1*(this.billedHeight/2)); //Syntax: Refference image() nederst    
    }
        
}


