import Pregled from './pregled';
import logg from './logger';
import format from './dateFormatter';
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
    izvrsi(){
        this.setVrednost(Math.random() * 100);
        this.setVremePoslednjegObroka(new Date());
        logg("Pacijent " + this.getPacijent().getIme() + " obavlja laboratorijski pregled za merenje holesterola. vrednost:"
        + this.getVrednost() + " poslednji obrok: " + format(this.getVremePoslednjegObroka()));
    }
}
export default PregledHolesterol;