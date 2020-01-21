class Pregled{
    constructor(datumIVreme, pacijent, doktor){
        //abstract
        if (this.contructor === Pregled){
            throw new Error("Ne sme se instancirati klasa Pregled");
        }

        //private fields
        let _datumIVreme = datumIVreme;
        let _pacijent = pacijent;
        let _doktor = doktor;

        this.setDatumIVreme = function(datum) {_datumIVreme = datum};
        this.getDatumIVreme = function(){return _datumIVreme};

        this.setPacijent = function (pacijent) {_pacijent = pacijent};
        this.getPacijent = function () {return _pacijent};

        this.setDoktor = function (doktor) {_doktor = doktor};
        this.getDoktor = function () {return _doktor};
    }
    izvrsi(){
        console.log("");
    }
}
export default Pregled;