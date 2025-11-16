// access >> modify

class BankAccount {
  public readonly userId: number;
  public  userName: string;
   protected userBalance: number;

    constructor(userId: number, userName: string, userBalance: number){
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance

    }

 private   addBalance(balance:number){
        this.userBalance = this.userBalance + balance
    }
}

class StudentBankAccount extends BankAccount{
    test(){
        this.userBalance
    }
}

const RakibMdAccount = new BankAccount(111,'Rakib Md', 20);

RakibMdAccount.addBalance(100)
RakibMdAccount.addBalance(50)
console.log(RakibMdAccount)