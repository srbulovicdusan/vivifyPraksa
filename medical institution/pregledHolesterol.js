import Pregled from './pregled'
class PregledHolesterol extends Pregled{
    constructor(datum, pacijent, doktor){
        super(datum, pacijent, doktor);

        //private fields
        let _vrednost = null;
        let _vremePoslednjegObroka = null;

        //getters and setters
        this.setVrednost = function(vrednost) {_vrednost = vrednost};
        this.getVrednost = function() {return _vrednost};

        this.setVremePoslednjegObroka = function(vremePoslednjegObroka) {_vremePoslednjegObroka = vremePoslednjegObroka};
        this.getVremePoslednjegObroka = function() {return _vremePoslednjegObroka};
    }
}
export default PregledHolesterol;