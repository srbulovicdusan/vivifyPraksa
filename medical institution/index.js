import Pacijent from './pacijent';
import Doktor from './doktor';
let pacijent = new Pacijent("Dragan", "Milankovic", 1231241251, 1);
console.log(pacijent);
let doktor = new Doktor("Milan", "Draganovic", "specijalnost");
pacijent.izaberiDoktora(doktor);
let pregledSecer = doktor.zakaziPregled(pacijent, "PregledHolesterol");
let pregledPritisak = doktor.zakaziPregled(pacijent, "PregledPritisak");
pacijent.izvrsiPregled(pregledSecer);
pacijent.izvrsiPregled(pregledPritisak);