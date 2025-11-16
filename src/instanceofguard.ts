// oop: instance of type gurd / type narrowing

class Person {
    name: string;

    constructor(name: string){
        this.name = name;
    }
    getSleep(numOfHours: number){
        console.log(`${this.name} doinik ${numOfHours} gonta gumay`)
    }
}

class Student extends Person{
    constructor(name: string){
        super(name);
    }

    doStudy(numOfHours: number){
        console.log(`${this.name} doinik ${numOfHours} gontha study kore`)
    }
}


class Teacher extends Person{
    constructor(name: string){
        super(name)
    }
    takeClass(numOfHours: number){
        console.log(`${this.name} doinik ${numOfHours} gontha class ney`)
    }
}
// function guard

const isStudent = (user: Person) => {
    return user instanceof Student; //user is student

}

const isteacher = (user: Person) => {
    return user instanceof Teacher;// user is teacher
}


const getUserInfo = (user: Person) => {
     if(isStudent(user)){
        user.doStudy(10)
     }
     else if(isteacher(user)){
        user.takeClass(5)
     }
     else{
        user.getSleep(15)
     }

}


    const student1 = new Student('Mr Student');
    const teacher1 = new Teacher('Mr Teacher') ;
    const person1 = new Person('Mr Person')

   getUserInfo(person1)