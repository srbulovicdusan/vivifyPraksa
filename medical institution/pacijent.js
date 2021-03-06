import PregledPritisak from "./pregledPritisak";
import PregledSecer from "./PregledSecer";
import PregledHolesterol from "./pregledHolesterol";
import format from './dateFormatter';

class Pacijent {
    constructor(ime, prezime, jmbg, brojKartona){
        //private fields
        let _ime = ime;
        let _prezime = prezime;
        let _jmbg = jmbg;
        let _brojKartona = brojKartona;
        let _doktor = null;
        //getters setters
        this.setIme = function(ime) { _ime = ime};
        this.getIme = function() {return _ime};
        this.setPrezime = function(prezime){_prezime = prezime};
        this.getPrezime = function(){return _prezime};
        this.setJmbg = function(jmbg) {_jbmg = jmbg};
        this.getJmbg = function() {return _jmbg};
        this.setBrojKartona = function(brojKartona) {_brojKartona = brojKartona};
        this.getBrojKartona = function(){return _brojKartona};
        this.setDoktor = function(doktor){_doktor = doktor};
        this.getDoktor = function(){return _doktor};
        console.log("[ " + format(new Date()) + " ] Kreiran pacijent " + _ime);

    }
    izaberiDoktora(doktor){
        console.log("[ " + format(new Date()) + " ] Pacijent " + this.getIme() + " bira doktora " + doktor.getIme() + " za svog izabranog lekara.");
        this.setDoktor(doktor);
        doktor.addPacijent(this);
    }
    izvrsiPregled(pregled){
        pregled.izvrsi();
        
    }
    

}
export default Pacijent;