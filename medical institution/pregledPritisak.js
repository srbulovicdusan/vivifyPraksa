import Pregled from './pregled'
class PregledPritisak extends Pregled{
    constructor(datum, pacijent, doktor){
        super(datum, pacijent, doktor);
        //private fields
        let _gVrednost = null;
        let _dVrednost = null;
        let _puls = null;

        //getters and setters
        this.setGVrednost = function(gVrednost) {_gVrednost = gVrednost};
        this.getGVrednost = function() {return _gVrednost};

        this.setDVrednost = function(dVrednost) {_dVrednost = dVrednost};
        this.getDVrednost = function() {return _dVrednost};

        this.setPuls = function(puls) {_puls = puls};
        this.getPuls = function() {return _puls};


    }
}
export default PregledPritisak;