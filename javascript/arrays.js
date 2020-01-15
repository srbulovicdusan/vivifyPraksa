export default () =>{
    let colors = ['red', 'orange', 'yellow'];
    for (let color of colors){
        console.log(color);
    }
    colors.forEach(el =>{
        console.log(el);
    });
    function rotate(steps, arr){
        for (let i = 0; i < steps; i++){
            arr = [arr[arr.length - 1]].concat(arr.splice(0, arr.length-1));
        }
        return arr;
    }
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    function makeArray(num){
        var arr = [];
        for (let i = 0; i < num; i++){
            arr.push(i);
        }
        return arr;
    }
    function printArray(arr) {
        
        for (var i = 0; i < arr.length; i++) {
            console.log(arr[i][0] + " the " + arr[i][1][0] + " is " + arr[i][1][1]);
        }
        
        
    }
    console.log([1, 2, 3, 4].reduce(reducer, 50));
    console.log(rotate(3, [1, 2, 3, 4]))
    console.log(makeArray(10));
    var myZoo = [
        ["King Kong", ["gorilla", 42]],
        ["Nemo", ["fish", 5]],
        ["Punxsutawney Phil", ["groundhog", 11]]
      ];
    printArray(myZoo);

}