export default () =>{
    var a = function(arr){
        return arr.map(el =>  el*el);
    }
    console.log(a([1, 2, 3]));
    (function(a, b){
        let c = a + b;
        console.log(c);
    })(2, 4);
    let timesTwo = ( number) =>{
        return number * 2
    }
    console.log(timesTwo(4));
}