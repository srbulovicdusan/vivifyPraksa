import PregledPritisak from "./pregledPritisak";
import PregledHolesterol from './pregledHolesterol';
import PregledSecer from './PregledSecer';
import format from './dateFormatter'
class Doktor{
    constructor(ime, prezime, specijalnost){
        //private fields
        let _ime = ime;
        let _prezime = prezime;
        let _specijalnost = specijalnost;
        let _pacijenti = [];
        //getters setters
        this.setIme = function(ime) { _ime = ime};
        this.getIme = function() {return _ime};
        this.setPrezime = function(prezime){_prezime = prezime};
        this.getPrezime = function(){return _prezime};
        this.setSpecijalnost = function(specijalnost){_specijalnost = specijalnost};
        this.getSpecijalnost = function(){return _specijalnost};
        this.setPacijenti = function(pacijenti){_pacijenti = pacijenti};
        this.getPacijenti = function(){return _pacijenti};
        console.log("[ " + format(new Date()) + " ] Kreiran doktor " + _ime);
    }
    zakaziPregled(pacijent, tipPregleda, datum){
        switch(tipPregleda){
            case "PregledPritisak":
                console.log("[ "+ format(new Date()) +" ] Doktor " + this.getIme() + " zakazuje pregled za merenje krvnog pritiska za pacijenta " + pacijent.getIme());
                return new PregledPritisak(datum, pacijent, this);
            case "PregledSecer":
                console.log("[ "+ format(new Date()) +" ] Doktor " + this.getIme() + " zakazuje pregled za merenje secera u krvi za pacijenta " + pacijent.getIme());
                return new PregledSecer(datum, pacijent, this);
            case "PregledHolesterol":
                console.log("[ "+ format(new Date()) +" ] Doktor " + this.getIme() + " zakazuje pregled za merenje holesterola u krvi za pacijenta " + pacijent.getIme());
                return new PregledHolesterol(datum, pacijent, this);


        }
    }
}

export default Doktor;