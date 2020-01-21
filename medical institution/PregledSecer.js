import Pregled from "./pregled";
import logg from './logger';
class PregledSecer extends Pregled{
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
            logg("Pacijent " + this.getIme() + " obavlja laboratorijski pregled za merenje nivoa secera u krvi. vrednost:"
            + pregled.getVrednost() + " poslednji obrok: " + format(pregled.getVremePoslednjegObroka()));
    }
}
export default PregledSecer;