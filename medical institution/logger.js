import format from './dateFormatter';
function logg(message){
    console.log("[ "+ format(new Date()) +" ] " + message);
}
export default logg;