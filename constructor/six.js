class Account{                                         //how to intialise object values ?using constructor.
    acc_id;
    acc_name;
    acc_Bal;
    constructor(id,name,bal){
        this.acc_id=id;
        this.acc_name=name;
        this.acc_Bal=bal;
    }
    deposit_Amount(amount){
        this.acc_Bal=this.acc_Bal+amount;

    }
    withdrawl(amount){
        this.acc_Bal=this.acc_Bal-amount;
        
    }
    get_Bal(){
        return this.acc_Bal-500;
    }
}
let a1=new Account(101,"Rahul",5000);
    a1.deposit_Amount(15000)
    a1.deposit_Amount(15)
    a1.withdrawl(20)
    console.log(a1)

let a2=new Account(102,"sonia",6000);
    a2.deposit_Amount(501)
    a2.withdrawl(20)
    console.log(a2)
 let a3=new Account(103,"priya",8000);
    a3.deposit_Amount(500)
    a3.withdrawl(10)
      
     console.log(a3)
     console.log(a1.get_Bal)
     console.log(a2.get_Bal)
     console.log(a3.get_Bal)