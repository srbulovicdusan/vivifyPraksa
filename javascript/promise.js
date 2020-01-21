import "babel-polyfill"
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
    let timeout = function(){
        let result = null;
        setTimeout(() => {}, 1000);
        Math.random() > 0.5 ? result = "Success" : result = "Error";
        if (result === "Success"){
            return result;
        }else{
            throw new Error("Err");
        }
    }
    const makeRequest = async () => {
        try {
          const data = await timeout();
          console.log(data)
        } catch (err) {
          console.log(err)
        }
      }
    makeRequest();
}