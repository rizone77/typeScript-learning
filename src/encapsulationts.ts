// access >> modify

class BankAccount {
  public readonly userId: number;
  public  userName: string;
   private userBalance: number;

    constructor(userId: number, userName: string, userBalance: number){
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance

    }

 private   addBalance(balance:number){
        this.userBalance = this.userBalance + balance
    }
   callHiddenMethod(balance: number){
    this.addBalance(balance)
   }

}

class StudentBankAccount extends BankAccount{
    test(){
        this.
}

const RakibMdAccount = new BankAccount(111,'Rakib Md', 20);

