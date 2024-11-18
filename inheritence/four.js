class Account{
    acc_Name;
    acc_Email;
}
class SA extends Account{          //SA-savings Account//
    acc_Id;
    acc_Bal;
    min_Bal=500;
    constructor(id,name,bal,email){
        super(name,email);
        this.acc_Id=id
        this.acc_Bal=bal;
    }

}
class CA extends Account{
    acc_Id;
    acc_Bal;
    min_Bal=2500;
    constructor(id,name,email,amount){
        super(name,email)
        this.acc_Id=id
        this.acc_Bal = amount
       
    }

}
let sa1=new SA(101,"Rahul",5000,'rahul@gmail.com',5000)
let ca1=new CA(102,"Priya",5000,'Priya@gmail.com',6000)
console.log(sa1)