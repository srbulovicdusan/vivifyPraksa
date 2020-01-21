export default () =>{
    var person = {
        firstname : "Dusan",
        lastname : "Srbulovic",
        age : 23
    }
    var personJSON = '{ "firstname" : "Dusan", "lastname" : "Srbulovic", "age" : 23}';
    console.log(JSON.parse(personJSON));
    console.log(JSON.stringify(person));

    var arr = [1, 2, 3];
    var arrJSON = '[1, 2, 3]';
    var a = JSON.parse(arrJSON);
    for (var i of a){
        console.log(i);
    }
}