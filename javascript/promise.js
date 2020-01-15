export default () =>{
    let promise = new Promise(function(resolve, reject) {
        setTimeout(() => Math.random() > 0.5 ? resolve("Success") : reject("Error"), 1000);
    });
    promise.then(
        function resolve(result){
            console.log(result);
        },
        function reject(result){
            console.log(result);
        }
    )
}