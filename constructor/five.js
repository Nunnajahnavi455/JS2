class Account{                                         //how to intialise object values ?using constructor.
    acc_id;
    acc_name;
    acc_Bal;
    constructor(id,name,bal){
        this.acc_id=id;
        this.acc_name=name;
        this.acc_Bal=bal;
    }
}
let a1=new Account(101,"Rahul",5000);
    // a1.deposit_Amount(50)
    console.log(a1)

let a2=new Account(102,"sonia",6000);
    // a2.deposit_Amount(501)
    // a2.deposit_Amount(10)
    console.log(a2)
 let a3=new Account(103,"priya",8000);
     console.log(a3)
