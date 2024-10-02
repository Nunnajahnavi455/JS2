// function wish(){
//     console.log('GOOD EVENING')
// }
// wish()                                             //here function will be overwriting then output will be gn gn
// function wish(){
//     console.log('GOOD NIGHT')
// }
// wish();

//by converting the above function i flat arrow function then we can avoid over writing
var wish=()=>{
    console.log("GM")
}
wish()
var wish=()=>{
    console.log("GN")
}
wish()