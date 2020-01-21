export default () => {
    const arr =[1, 2, 3];
    arr.push(4);
    console.log(arr);
    try {
        arr = 3;
    }catch(err){
        console.log(err);
    }

    class Person {
        constructor(fname, lname){
            this.fname = fname;
            this.lname = lname;
        }
    }
    function person(ime, prezime){
        this.ime = ime;
        this.prezime = prezime;
    }
    var a = new person("ime", "prezime");
    console.log(a);
    var p = new Person("ime", "prezime");
    console.log(p);

    let arrow = (ime, prezime) => {
        this.ime = ime;
        this.prezime = prezime;
    }
    //undefined
    console.log(arrow.ime);
}