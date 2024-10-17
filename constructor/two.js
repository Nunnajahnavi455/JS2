class Test{
    constructor(){
        console.log('welcome')
    }
    
     //we need a constructor here constructor  is a special method ,it is used to intialise object values. constructor method will  execute automatically  at the time of object creation only once.we cannot invoke explicitly.
    
    greet(){
        console.log('GOOD EVENING')
    }
}
let t1=new Test()
let t2=new Test()
let t3=new Test()