class Person {
  name: string;// common
    age: number;// commom 
    address: string

    constructor(name: string, age:number,address: string){
        this.name = name;
        this.age = age;
        this.address = address
    }

    getSleep(numOfHours: number){
        console.log(`${this.name}  ${numOfHours} gontha gumay`);
    }
}

class Student extends Person { 
       rollNo: number;

       constructor(name: string, age: number, address:string, rollNo: number ){
        super(name, age, address)
        this.rollNo = rollNo;
       }

  }





class Teacher  extends Person{
  
    designation: string;  // own property

    constructor( name: string, age: number, address: string, designation: string){

        super(name, age, address)
        
        this.designation = designation;
    }

// own method
    takeClass(numOfClass: number){
        console.log(`${this.name} ${numOfClass} gonta class nei `)
    }
}

const teacher1 = new Teacher('Mr Smart Teacher', 25, "Bangladesh", "Senior teacher")

teacher1.takeClass(10)

const student1 = new Student(`Mr. fakibaaz`, 18, "Bangladesh",1981);
