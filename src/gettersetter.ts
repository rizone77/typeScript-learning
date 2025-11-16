// getter
//setter



class BankAccount {
  public readonly userId: number;
  public  userName: string;
   protected userBalance: number;

    constructor(userId: number, userName: string, userBalance: number){
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance

    }
     
    // // balance k set 
    //    addBalance(balance:number){
    //    return this.userBalance = this.userBalance + balance
    // }
    // setter use kore korte chai

    set addBalance(amount: number){
          this.userBalance = this.userBalance + amount;
    }
          // get korbo
    //    getBalance(){
    //     return this.userBalance;
    //    }

    // Getter use kore get korte chai

    get getBalance () {
       return this.userBalance;
    }

}



const RakibMdAccount = new BankAccount(111,'Rakib Md', 20);

// RakibMdAccount.addBalance(100) // function call korte hochhe
// RakibMdAccount.addBalance(60)
// console.log(RakibMdAccount.getBalance()) // function call korte hochhe

RakibMdAccount.addBalance = 100;
RakibMdAccount.addBalance = 60;
console.log(RakibMdAccount.getBalance)