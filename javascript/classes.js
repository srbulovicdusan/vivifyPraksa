export default () => {
    
    class Character{
        
        constructor(x, y){
            
            Character.counter++;
            this.x = Math.round(Math.random() * 10);
            this.y = Math.round(Math.random() * 10);
            if (this.constructor === Character){
                throw new Error("Character cannot be instantianted");
            }
        }
        // static get count(){
        //     return this.hasOwnProperty('counter') ? this.counter: 0;
        // }
        setXY(x, y){
            if (x > 10 || y > 10){
                throw new Error("Cordinates out of bounds");
            }else{
                this.x = x;
                this.y = y;
            }
        }
        getXY(){
            return [this.x, this.y];
        }
        
    }
    //staticka promenljiva
    Character.counter = 0;

    class PLayerCharacter extends Character{
        constructor(){
            super();
        }
    }
    class NonPLayerCharacter extends Character{
        constructor(){
            super();
        }
    }
    var player = new PLayerCharacter();
    console.log(player);
    console.log(player.getXY());
    try{
        player.setXY(11, 1);
    }catch(err){
        console.log(err);
    }
    var player2 = new NonPLayerCharacter();
    console.log("Numnber of players", Character.counter);
}